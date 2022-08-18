import './footer.scss';
import { IComponent } from '../../Interfase-component';
import { createDiv, createAnchor, createImg, createText } from '../../../../utils/HTML-Builder';
import { anchorGitHub } from '../../AboutTeam/Card/card';

const imgGithab = [
    '../../../assets/img/github2Jgor.png',
    '../../../assets/img/github2Nikita.png',
    '../../../assets/img/github2Sveta.png',
];

class Footer implements IComponent {
    start(): HTMLDivElement {
        const footer = createDiv(['footer']);

        const anchorRS = createAnchor('https://rs.school/js/', ['footer__linkRS']);
        const imgLogo = createImg('../../../assets/img/logoRS3.png', 'logotip RS school', ['footer__img_RS']);
        anchorRS.append(imgLogo);

        const footerLinkGithub = createDiv(['footer__personLinc']);

        for (let i = 0; i < anchorGitHub.length; i += 1) {
            const anchorGithub = createAnchor(anchorGitHub[i], ['footer__github']);
            const imgGitHub = createImg(imgGithab[i], 'img GitHub', ['footer__img_GitHub']);
            anchorGithub.append(imgGitHub);
            footerLinkGithub.append(anchorGithub);
        }

        const yearTxt = createText('2022', 'p', ['footer__year']);

        footer.append(footerLinkGithub, yearTxt, anchorRS);
        return footer;
    }
}

export default Footer;
