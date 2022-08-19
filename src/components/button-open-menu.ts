import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';

export default class ButtonOpenMenu extends BaseComponent<HTMLButtonElement> {
  constructor(private readonly parent: HTMLElement, private readonly service: Services) {
    super('button', 'header__icon_menu');
  }

  render = () => {
    this.element.innerHTML = '<img src="../assets/img/menu.png" alt="">';
    this.element.addEventListener('click', this.service.menu.openMenu);
    this.parent.appendChild(this.element);
  };
}
