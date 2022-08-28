import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import ButtonWithCallback from './button-with-callback';
import FormAutorise from './form-autorise';

export default class AutoriseFormModal extends BaseComponent {
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
      this.services.form.closeAutoriseForm
    ).render();
    new FormAutorise(this.element, this.services).render();
    this.services.form.add('close-autorise-form', this.closeAutoriseForm);
    this.services.form.add('open-autorise-form', this.openAutoriseForm);
    this.parent.appendChild(this.element);
  }

  openAutoriseForm = () => {
    this.services.menu.showDarkLayer();
    this.services.form.clearInput();
    this.services.form.unDisabledBtnAutorise();
    this.element.style.display = 'block';
    this.services.form.removeAutoriseError();
  };

  closeAutoriseForm = () => {
    this.services.menu.removeDarkLayer();
    this.element.style.display = 'none';
  };
}
