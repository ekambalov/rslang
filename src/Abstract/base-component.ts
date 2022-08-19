export default class BaseComponent<E extends HTMLElement = HTMLElement> {
  readonly element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', classes = '') {
    const el = <E>document.createElement(tag);
    el.className = classes;
    this.element = el;
  }
}
