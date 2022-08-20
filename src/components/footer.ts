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
    linksProps.forEach((link) => new LinkGitHub(containerLinkGitHub, this.services, link).render());
    const year = new BaseComponent('p', 'footer__year').element;
    year.innerHTML = '2022';
    new LinkGitHub(this.element, this.services, {
      src: 'https://rs.school/js/',
      img: './assets/img/logoRS3.png',
    }).render();

    this.element.prepend(containerLinkGitHub, year);
    this.parent.appendChild(this.element);
  };
}

// import './footer.scss';
// import { IComponent } from '../../../Components/view/Interfase-component';
// import { createDiv, createAnchor, createImg, createText } from '../../../utils/HTML-Builder';
// import { anchorGitHub } from '../../../Components/view/AboutTeam/Card/card';
// import LinkGitHub from './link-GitHub';

//     '../../../assets/img/github2Jgor.png',
//     '../../../assets/img/github2Nikita.png',
//     '../../../assets/img/github2Sveta.png',
// ];

// class Footer implements IComponent {
//     start(): HTMLDivElement {
//         const footer = createDiv(['footer']);

//         const anchorRS = createAnchor('https://rs.school/js/', ['footer__linkRS']);
//         const imgLogo = createImg('../../../assets/img/logoRS3.png', 'logotip RS school', ['footer__img_RS']);
//         anchorRS.append(imgLogo);

//         const footerLinkGithub = createDiv(['footer__personLinc']);

//         for (let i = 0; i < anchorGitHub.length; i += 1) {
//             const anchorGithub = createAnchor(anchorGitHub[i], ['footer__github']);
//             const imgGitHub = createImg(imgGithab[i], 'img GitHub', ['footer__img_GitHub']);
//             anchorGithub.append(imgGitHub);
//             footerLinkGithub.append(anchorGithub);
//         }

//         const yearTxt = createText('2022', 'p', ['footer__year']);

//         footer.append(footerLinkGithub, yearTxt, anchorRS);
//         return footer;
//     }
// }

// export default Footer;
