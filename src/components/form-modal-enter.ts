import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import ButtonWithCallback from './button-with-callback';
import FormEnter from './form-enter';

export default class EnterFormModal extends BaseComponent {
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
      this.services.form.closeEnterForm
    ).render();
    new FormEnter(this.element, this.services).render();
    this.services.form.add('close-enter-form', this.closeEnterForm);
    this.services.form.add('open-enter-form', this.openEnterForm);
    this.parent.appendChild(this.element);
  }

  openEnterForm = () => {
    this.services.menu.showDarkLayer();
    this.services.form.clearInput();
    this.services.form.unDisabledBtnAutorise();
    this.element.style.display = 'block';
    this.services.form.removeAutoriseError();
  };

  closeEnterForm = () => {
    this.services.menu.removeDarkLayer();
    this.element.style.display = 'none';
  };
}
