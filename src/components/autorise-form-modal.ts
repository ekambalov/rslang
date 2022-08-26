import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import Form from './form';
import ButtonWithCallback from './button-with-callback';

export default class FormAutorise extends BaseComponent {
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
    new Form(this.element, this.services).render();
    this.services.form.add('close-autorise', this.closeAutoriseForm);
    this.services.form.add('open-autorise', this.openAutoriseForm);
    this.parent.appendChild(this.element);
  }

  openAutoriseForm = () => {
    this.services.menu.showDarkLayer();
    this.services.form.clearInput();
    this.services.form.unDisabledBtnAutorise();
    this.element.style.display = 'block';
  };

  closeAutoriseForm = () => {
    this.element.style.display = 'none';
    this.services.menu.removeDarkLayer();
  };
}
