/* eslint-disable import/no-cycle */
import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';

export default class Label2 extends BaseComponent<HTMLHeadingElement> {
  constructor(
    private readonly parent: HTMLElement,
    private readonly service: Services,
    private readonly classes: string,
    private readonly title: string,
    private readonly type: string
  ) {
    super('h6', classes);
  }

  render = () => {
    this.element.innerHTML = `jyujuyk`;
    // this.element.setAttribute('for', `${this.type}`);
    this.parent.appendChild(this.element);
  };
}
