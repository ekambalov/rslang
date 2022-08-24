/* eslint-disable import/no-cycle */
import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';

export default class Label extends BaseComponent<HTMLLabelElement> {
  constructor(
    private readonly parent: HTMLElement,
    private readonly service: Services,
    private readonly classes: string,
    private readonly title: string,
    private readonly type: string
  ) {
    super('label', classes);
  }

  render = () => {
    this.element.textContent = `${this.title}`;
    this.element.setAttribute('for', `${this.type}`);
    this.parent.appendChild(this.element);
  };
}
