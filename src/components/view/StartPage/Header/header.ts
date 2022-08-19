import './header.scss';
import { IComponentHead } from '../../Interfase-component';
import Navigation from './Navigation/navigation';
import { createDiv, createImg, createText } from '../../../../utils/HTML-Builder';

class Header implements IComponentHead {
    showMenu(): void {
        const navigationBlock = document.querySelector('.header__navigation') as HTMLDivElement;
        navigationBlock.classList.toggle('active');
    }

    start(): HTMLElement {
        const header = document.createElement('header');
        header.classList.add('footer');
        const logoMenu = createImg('../../../../assets/img/menu.png', 'iconMenu', ['header__icon_menu']);
        logoMenu.addEventListener('click', this.showMenu);
        logoMenu.addEventListener('mouseover', () => {
            logoMenu.src = '../../../../assets/img/menu7.png';
        });
        logoMenu.addEventListener('mouseleave', () => {
            logoMenu.src = '../../../../assets/img/menu.png';
        });
        const navigation = new Navigation().start();
        const infoAutorise = createDiv(['header__infoAutorise']);
        const autorise = createText('Login', 'p', ['header__infoAutorise_login']);
        infoAutorise.append(autorise);
        header.append(logoMenu, navigation, infoAutorise);
        return header;
    }
}

export default Header;
