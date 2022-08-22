import Services from '../Service/service';
import BaseComponent from '../Abstract/base-component';
import linksProps from '../Settings/link-person-gitHub.json';
import LinkGitHub from './link-GitHub';

export default class Footer extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('footer', 'footer');
  }

  render = () => {
    const containerLinkGitHub = new BaseComponent('div', 'footer-links').element;
    linksProps.forEach((link) =>
      new LinkGitHub(
        containerLinkGitHub,
        this.services,
        link,
        'footer__link',
        'footer__link_imgGitHub',
        'white'
      ).render()
    );
    const year = new BaseComponent('p', 'footer__year').element;
    year.innerHTML = '2022';
    new LinkGitHub(
      this.element,
      this.services,
      {
        src: 'https://rs.school/js/',
        imgWhite: './assets/img/logoRS3.png',
        imgBlack: './assets/img/logoRS.png',
      },
      'footer__link',
      'footer__link_imgRS',
      'white'
    ).render();

    this.element.prepend(containerLinkGitHub, year);
    this.parent.appendChild(this.element);
  };
}
