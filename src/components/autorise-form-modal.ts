import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import ButtonCloseAutorise from './button-close-autorise';
import Form from './form';

export default class FormAutorise extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'form-container');
  }

  render(): void {
    new ButtonCloseAutorise(this.element, this.services).render();
    new Form(this.element, this.services).render();
    this.services.menu.add('close-autorise', this.closeAutoriseForm);
    this.services.menu.add('open-autorise', this.openAutoriseForm);
    this.parent.appendChild(this.element);
  }

  openAutoriseForm = () => {
    this.element.style.display = 'block';
    this.services.menu.showDarkLayer();
  };

  closeAutoriseForm = () => {
    this.element.style.display = 'none';
    this.services.menu.removeDarkLayer();
  };
}
