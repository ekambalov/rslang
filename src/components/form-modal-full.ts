import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import FormFull from './form-full';
import ButtonWithCallback from './button-with-callback';

export default class FormModalFull extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'form-container');
  }

  render(): void {
    new ButtonWithCallback(
      this.element,
      this.services,
      'header__btn_closeAutorise',
      'X',
      'button',
      this.services.form.closeFormFull
    ).render();
    new FormFull(this.element, this.services).render();
    this.services.form.add('close-form-full', this.closeFormFull);
    this.services.form.add('open-form-full', this.openFormFull);
    this.parent.appendChild(this.element);
  }

  openFormFull = () => {
    this.services.menu.showDarkLayer();
    this.services.form.clearInput();
    this.services.form.unDisabledBtnAutorise();
    this.element.style.display = 'block';
    this.services.form.removeAutoriseError();
    this.services.form.fullAllInput = false;
    this.services.form.fullEnterInput = false;
  };

  closeFormFull = () => {
    this.services.menu.removeDarkLayer();
    this.element.style.display = 'none';
  };
}
