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
      // this.services.form.clickAutorise
    ).render();
    new Button(
      this.element,
      this.services,
      'form__btn_enter',
      'Войти',
      'button'
      // this.services.form.clickEnter
    ).render();
    this.element.prepend(helloTxt);
    this.parent.appendChild(this.element);
  }
}
