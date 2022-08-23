import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';

export default class ButtonCloseAutorise extends BaseComponent<HTMLButtonElement> {
  constructor(private readonly parent: HTMLElement, private readonly service: Services) {
    super('button', 'header__btn_closeAutorise');
  }

  render = () => {
    this.element.addEventListener('click', this.service.menu.closeAutoriseForm);
    this.element.textContent = 'X';
    this.parent.appendChild(this.element);
  };
}
