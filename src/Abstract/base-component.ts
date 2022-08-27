export default class BaseComponent<E extends HTMLElement = HTMLElement> {
  readonly element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', classes?: string) {
    const el = <E>document.createElement(tag);
    if (classes) {
      el.className = classes;
    }
    this.element = el;
  }
}
