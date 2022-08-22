import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import ButtonOpenMenu from './button-open-menu';
import Navigation from './navigation';

export default class Header extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('header', 'header');
  }

  render = () => {
    new ButtonOpenMenu(this.element, this.services).render();
    new Navigation(this.element, this.services).render();
    const owerflov = new BaseComponent('div', 'owerflov').element;
    this.element.append(owerflov);
    this.parent.appendChild(this.element);
  };
}
