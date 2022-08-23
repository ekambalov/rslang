import BaseComponent from '../Abstract/base-component';
import { ILinkProps } from '../Interfaces/interfaces';
import Services from '../Service/service';

export default class NavLink extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services, private props: ILinkProps) {
    super('li', 'nav-list__item');
  }

  render = () => {
    const { content, path } = this.props;

    const link = new BaseComponent('a', 'nav-list__link').element;
    link.setAttribute('href', `#${path}`);
    link.textContent = `${content}`;
    this.element.appendChild(link);
    this.parent.appendChild(this.element);

    this.services.router.add('router', (router: string) => {
      if (path === router) {
        this.setActive();
      } else {
        this.removeActive();
      }
    });
  };

  setActive(): void {
    this.element.classList.add('active');
  }

  removeActive(): void {
    this.element.classList.remove('active');
    this.services.menu.dispath('close-menu');
    this.services.menu.dispath('scroll-off');
    if (document.querySelector('.owerflov'))
      (document.querySelector('.owerflov') as HTMLElement).style.display = 'none';
  }
}