import BaseComponent from '../Abstract/base-component';
// import { getNavSetting } from '../Model/getSettings';
import linksProps from '../Settings/menu.json';
import Services from '../Service/service';
import ButtonCloseMenu from './button-close-menu';
import NavLink from './nav-link';

export default class Navigation extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('nav', 'header__nav');
  }

  render = () => {
    new ButtonCloseMenu(this.element, this.services).render();

    const navList = new BaseComponent('ul', 'nav-list').element;
    linksProps.forEach((link) => new NavLink(navList, this.services, link).render());

    this.services.menu.add('close-menu', this.closeMenu);
    this.services.menu.add('open-menu', this.openMenu);
    this.services.menu.add('scroll-off', this.scrollOff);
    this.services.menu.add('scroll-on', this.scrollOn);

    this.element.appendChild(navList);
    this.parent.appendChild(this.element);
  };

  closeMenu = () => {
    this.element.classList.remove('open');
    this.services.menu.removeDarkLayer();
    this.scrollOn();
  };

  openMenu = () => {
    this.element.classList.add('open');
    this.services.menu.showDarkLayer();
    this.scrollOn();
  };

  scrollOff = () => {
    document.body.style.overflow = '';
  };

  scrollOn = () => {
    document.body.style.overflow = 'hidden';
  };
}
