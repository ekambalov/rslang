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

    this.element.appendChild(navList);
    this.parent.appendChild(this.element);
  };

  closeMenu = () => {
    this.element.classList.remove('open');
  };

  openMenu = () => {
    this.element.classList.add('open');
  };

  // start(): HTMLDivElement {
  //   const navigation = createDiv(['header__navigation']);
  //   const closeMenu = createImg('../../../assets/img/closeMenu.png', 'icon close menu', ['header__navigation_icon']);
  //   closeMenu.addEventListener('mouseover', () => {
  //     closeMenu.src = '../../../assets/img/closeMenu2.png';
  //   });
  //   closeMenu.addEventListener('mouseleave', () => {
  //     closeMenu.src = '../../../assets/img/closeMenu.png';
  //   });
  //   closeMenu.addEventListener('click', this.closeMain);
  //   const navigationUL = document.createElement('ul') as HTMLUListElement;
  //   navigationUL.classList.add('header__navigation_ul');

  //   for (let i = 0; i < navAnchor.length; i += 1) {
  //     const navigationLI = document.createElement('li') as HTMLLIElement;
  //     navigationLI.classList.add('header__navigation_li');
  //     navigationLI.classList.add(`${classItem[i]}`);

  //     const anchorNav = document.createElement('a') as HTMLAnchorElement;
  //     anchorNav.classList.add('header__navigation_a');

  //     anchorNav.innerHTML = navAnchor[i];
  //     navigationLI.append(anchorNav);
  //     navigationUL.append(navigationLI);
  //   }
  //   navigation.append(closeMenu, navigationUL);
  //   return navigation;
  // }
}
