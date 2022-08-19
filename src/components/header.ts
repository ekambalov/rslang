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
    this.parent.appendChild(this.element);
  };

  // start(): HTMLDivElement {
  //   const header = createDiv(['header']);
  //   const logoMenu = createImg('../../../../assets/img/menu.png', 'iconMenu', ['header__icon_menu']);
  //   logoMenu.addEventListener('click', this.showMenu);
  //   logoMenu.addEventListener('mouseover', () => {
  //     logoMenu.src = '../../../../assets/img/menu7.png';
  //   });
  //   logoMenu.addEventListener('mouseleave', () => {
  //     logoMenu.src = '../../../../assets/img/menu.png';
  //   });
  //   const navigation = new Navigation().start();
  //   const infoAutorise = createDiv(['header__infoAutorise']);
  //   const autorise = createText('Login', 'p', ['header__infoAutorise_login']);
  //   infoAutorise.append(autorise);
  //   header.append(logoMenu, navigation, infoAutorise);
  //   return header;
  // }
}
