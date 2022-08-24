import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
// import { ICallback } from '../Interfaces/interfaces';

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
  // private readonly callback: ICallback

  render = () => {
    this.element.textContent = `${this.nameBtn}`;
    this.element.setAttribute('type', `${this.type}`);
    this.parent.appendChild(this.element);
    this.service.form.add('disabled-btn-autorise', this.disabledBtnAutorise);
    // this.element.addEventListener('click', this.callback);
  };

  disabledBtnAutorise = () => {
    this.element.setAttribute('disabled', 'true');
  };
}
