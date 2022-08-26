/* eslint-disable import/no-cycle */
import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import { IOptionsInput } from '../Interfaces/interfaces';

export default class Label extends BaseComponent<HTMLLabelElement> {
  constructor(
    private readonly parent: HTMLElement,
    private readonly service: Services,
    private readonly classes: string,
    private readonly options: IOptionsInput
  ) {
    super('label', classes);
  }

  render = () => {
    this.element.textContent = `${this.options.title}`;
    this.element.setAttribute('for', `${this.options.type}`);
    this.parent.appendChild(this.element);
  };
}