import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import { IOptionsInput } from '../Interfaces/interfaces';
import { FormInput } from './form-Input';
import Button from './button';

const inputs: IOptionsInput[] = [
  { title: 'Ваше имя:', type: 'text', id: 'name', name: 'name' },
  { title: 'E-mail:', type: 'email', id: 'emal', name: 'email' },
  { title: 'Введите пароль:', type: 'password', id: 'password', name: 'password' },
];

export default class Form extends BaseComponent {
  private messageElement?: HTMLElement;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('form', 'form');
  }

  render(): void {
    const helloTxt = new BaseComponent('h3', 'form__title').element;
    helloTxt.innerHTML = 'Привет!';
    inputs.forEach((input) => {
      new FormInput(this.element, this.services, input).render();
    });
    new Button(
      this.element,
      this.services,
      'form__btn_autorise',
      'Авторизация',
      'button'
      //  this.services.form.clickAutorise
    ).render();
    new Button(
      this.element,
      this.services,
      'form__btn_enter',
      'Войти',
      'button'
      // this.services.form.clickEnter
    ).render();
    this.messageElement = new BaseComponent('p', 'autorise-error').element;
    this.messageElement.textContent = '';
    this.element.prepend(helloTxt);
    this.element.appendChild(this.messageElement);
    this.parent.appendChild(this.element);
    this.services.form.add('show-autorise-error', this.showAutoriseError);
    this.services.form.add('remove-autorise-error', this.removeAutoriseError);
  }

  showAutoriseError = () => {
    (this.messageElement as HTMLElement).textContent = this.services.form.btnClickAutorise
      ? 'Такой пользователь уже есть :('
      : 'Такого пользователя нет :(';
    if (!this.services.form.fullAllInput) (this.messageElement as HTMLElement).textContent = 'Не все поля заполнены';
  };

  removeAutoriseError = () => {
    (this.messageElement as HTMLElement).textContent = '';
  };
}
