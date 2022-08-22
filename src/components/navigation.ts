import BaseComponent from '../Abstract/base-component';
// import { getNavSetting } from '../Model/getSettings';
import linksProps from '../Settings/menu.json';
import Services from '../Service/service';
import ButtonCloseMenu from './button-close-menu';
import NavLink from './nav-link';

export default class Navigation extends BaseComponent {
  flagOverflow: boolean;

  scrollFlag: boolean;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('nav', 'header__nav');
    this.flagOverflow = false;
    this.scrollFlag = false;
  }

  render = () => {
    new ButtonCloseMenu(this.element, this.services).render();

    const navList = new BaseComponent('ul', 'nav-list').element;
    linksProps.forEach((link) => new NavLink(navList, this.services, link).render());

    this.services.menu.add('close-menu', this.closeMenu);
    this.services.menu.add('open-menu', this.openMenu);
    this.services.menu.add('scroll-off', this.scrollOff);

    this.element.appendChild(navList);
    this.parent.appendChild(this.element);
  };

  closeMenu = () => {
    this.element.classList.remove('open');
    this.flagOverflow = !this.flagOverflow;
    this.scrollFlag = !this.scrollFlag;
    const owerflovElement: HTMLElement | null = document.querySelector('.owerflov');
    if (this.flagOverflow && owerflovElement) {
      this.owerflovAdd(owerflovElement);
    } else {
      this.owerflovRemove(owerflovElement as HTMLElement);
    }
    if (this.scrollFlag) {
      this.scrollOn();
    } else {
      this.scrollOff();
    }
  };

  openMenu = () => {
    this.element.classList.add('open');
    this.flagOverflow = !this.flagOverflow;
    const owerflovElement: HTMLElement | null = document.querySelector('.owerflov');
    if (this.flagOverflow && owerflovElement) {
      this.owerflovAdd(owerflovElement);
    }
    this.scrollFlag = !this.scrollFlag;
    if (this.scrollFlag) {
      this.scrollOn();
    } else {
      this.scrollOff();
    }
  };

  owerflovAdd = (el: HTMLElement) => {
    const elem = el;
    elem.style.display = 'block';
  };

  owerflovRemove = (el: HTMLElement) => {
    const elem = el;
    elem.style.display = 'none';
  };

  scrollOff = () => {
    document.body.style.overflow = '';
  };

  scrollOn = () => {
    document.body.style.overflow = 'hidden';
  };
}
