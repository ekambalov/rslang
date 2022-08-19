import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';

export default class ButtonCloseMenu extends BaseComponent<HTMLButtonElement> {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('button', 'header__icon_menu');
  }

  render = () => {
    this.element.innerHTML = '<img src="../assets/img/closeMenu.png" alt="">';
    this.element.addEventListener('click', this.services.menu.closeMenu);
    this.parent.appendChild(this.element);
  };
}
