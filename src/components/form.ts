import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import { IOptionsInput } from '../Interfaces/interfaces';
import { FormInput } from './form-Input';
import Button from './button';

export default class FormAutorise extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('form', 'form');
  }

  render(): void {
    const inputs: IOptionsInput[] = [
      { title: 'Ваше имя:', type: 'text', id: 'firstName', name: 'firstName' },
      { title: 'Введите пароль:', type: 'password', id: 'password', name: 'password' },
      { title: 'E-mail:', type: 'email', id: 'emal', name: 'email' },
    ];
    const helloTxt = new BaseComponent('h3', 'form__title').element;
    helloTxt.innerHTML = 'Привет!';
    inputs.forEach((input) => {
      new FormInput(this.element, this.services, input).render();
    });
    new Button(this.element, this.services, 'form__btn_autorise', 'Авторизация', 'submit').render();
    new Button(this.element, this.services, 'form__btn_enter', 'Войти', 'submit').render();
    this.element.prepend(helloTxt);
    this.parent.appendChild(this.element);
    this.services.menu.add('open-autorise', this.openAutoriseForm);
  }

  openAutoriseForm = () => {
    this.element.style.display = 'block';
    this.services.menu.showDarkLayer();
  };
}
