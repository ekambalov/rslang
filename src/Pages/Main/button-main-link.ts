import BaseComponent from '../../Abstract/base-component';
import { ILinkButtonProps } from '../../Interfaces/interfaces';
import Services from '../../Service/service';

export default class ButtonLink extends BaseComponent {
  constructor(
    private readonly parent: HTMLElement,
    private readonly services: Services,
    private props: ILinkButtonProps
  ) {
    super('a', 'button__link');
  }

  render = () => {
    const { content, clas, path } = this.props;
    this.element.setAttribute('href', `#${path}`);
    this.element.classList.add(`${clas}`);
    this.element.textContent = `${content}`;
    if (this.element.textContent === 'Авторизация') {
      this.element.addEventListener('click', this.services.form.openAutoriseForm);
    }
    this.parent.appendChild(this.element);
  };
}
