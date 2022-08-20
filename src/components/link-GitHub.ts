import Services from '../Service/service';
import BaseComponent from '../Abstract/base-component';
import { ILinkGitHub } from '../Interfaces/interfaces';

export default class LinkGitHub extends BaseComponent {
  constructor(
    private readonly parent: HTMLElement,
    private readonly services: Services,
    private linkGitHub: ILinkGitHub
  ) {
    super('a', 'footer-links__link');
  }

  render = () => {
    const { src, img } = this.linkGitHub;
    this.element.setAttribute('href', src);

    const logoGitHub = new BaseComponent('img', 'footer__link_img').element;
    logoGitHub.setAttribute('src', img);
    logoGitHub.setAttribute('alt', 'link gitHub');
    this.element.append(logoGitHub);
    this.parent.append(this.element);
  };
}
