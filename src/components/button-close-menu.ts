import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';

export default class ButtonCloseMenu extends BaseComponent<HTMLButtonElement> {
  constructor(private readonly parent: HTMLElement, private readonly service: Services) {
    super('button', 'header__btn_closeMenu');
  }

  render = () => {
    this.element.addEventListener('click', this.service.menu.closeMenu);
    this.parent.appendChild(this.element);
  };
}
