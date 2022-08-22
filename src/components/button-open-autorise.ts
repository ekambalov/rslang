import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';

export default class ButtonOpenAutorise extends BaseComponent<HTMLButtonElement> {
  constructor(private readonly parent: HTMLElement, private readonly service: Services) {
    super('button', 'header__btn_openAutorise');
  }

  render = () => {
    this.element.addEventListener('click', this.service.menu.openAutoriseForm);
    this.element.textContent = 'Autorise';
    this.parent.appendChild(this.element);
  };
}
