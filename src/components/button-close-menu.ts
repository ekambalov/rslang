import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';

export default class ButtonCloseMenu extends BaseComponent<HTMLButtonElement> {
  constructor(private readonly parent: HTMLElement, private readonly service: Services) {
    super('button', 'header__btn_closeMenu');
  }

  render = () => {
    // this.element.innerHTML = '<img src="../assets/img/menu.png" class="btn__openMenu_icon" alt="">';
    this.element.addEventListener('click', this.service.menu.closeMenu);
    this.parent.appendChild(this.element);
  };
}
