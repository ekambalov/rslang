import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import ButtonOpenMenu from './button-open-menu';
import Navigation from './navigation';
import ButtonOpenAutorise from './button-open-autorise';
import FormAutorise from './Form';
import DarkLayer from './dark-layer';

export default class Header extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('header', 'header');
  }

  render = () => {
    new ButtonOpenMenu(this.element, this.services).render();
    new Navigation(this.element, this.services).render();
    new DarkLayer(this.element, this.services).render();
    new ButtonOpenAutorise(this.element, this.services).render();
    new FormAutorise(this.element, this.services).render();
    this.parent.appendChild(this.element);
  };
}
