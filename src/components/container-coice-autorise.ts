import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import ButtonAutorise from './button-autorise';

export default class ContainerCoiceAutorise extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'header__container_coice-autorise');
  }

  render = () => {
    new ButtonAutorise(
      this.element,
      this.services,
      'header__btn_openAutorise',
      'Autorise',
      'button',
      this.services.form.openAutoriseForm
    ).render();
    new ButtonAutorise(
      this.element,
      this.services,
      'header__btn_openEnter',
      'Enter',
      'button',
      this.services.form.openEnterForm
    ).render();
    this.parent.appendChild(this.element);
    this.services.form.add('show-container-autorise', this.showContainerAutorise);
    this.services.form.add('hide-container-autorise', this.hideContainerAutorise);
  };

  showContainerAutorise = () => {
    this.element.style.display = 'flex';
  };

  hideContainerAutorise = () => {
    this.element.style.display = 'none';
  };
}
