import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';

export default class Button extends BaseComponent<HTMLButtonElement> {
  constructor(
    private readonly parent: HTMLElement,
    private readonly service: Services,
    private readonly classes: string,
    private readonly nameBtn: string,
    private readonly type: string
  ) {
    super('button', classes);
  }

  render = () => {
    //  this.element.addEventListener('click', this.service.menu.openAutorise);
    this.element.textContent = `${this.nameBtn}`;
    this.element.setAttribute('type', `${this.type}`);
    this.parent.appendChild(this.element);
  };
}
