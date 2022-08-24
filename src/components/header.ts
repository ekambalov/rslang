import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import Navigation from './navigation';
import DarkLayer from './dark-layer';
import FormAutorise from './autorise-form-modal';
import ButtonWithCallback from './button-with-callback';
import ContainerExitAutorise from './container-exit-autorise';
import ButtonAutorise from './button-autorise';

export default class Header extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('header', 'header');
  }

  render = () => {
    new ButtonWithCallback(
      this.element,
      this.services,
      'header__btn_openMenu',
      '',
      'button',
      this.services.menu.openMenu
    ).render();
    new Navigation(this.element, this.services).render();
    new DarkLayer(this.element, this.services).render();
    new ButtonAutorise(
      this.element,
      this.services,
      'header__btn_openAutorise',
      'Autorise',
      'button',
      this.services.form.openAutoriseForm
    ).render();
    new ContainerExitAutorise(this.element, this.services).render();
    new FormAutorise(this.element, this.services).render();
    this.parent.appendChild(this.element);
  };
}
