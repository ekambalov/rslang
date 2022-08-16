import './header.scss';
import { IComponent } from '../InterfaseComponent';
import Navigation from './navigation/navigation';
import TextBlock from './textBlock/textBlock';
import MobileImgBlock from './mobileImgBlock/mobileImgBlock';

class Header implements IComponent {
    start(): HTMLDivElement {
        const header = document.createElement('div') as HTMLDivElement;
        header.classList.add('header');
        const navigation = new Navigation().start();

        const textAndImg = document.createElement('div') as HTMLDivElement;
        textAndImg.classList.add('header__textAndImg');
        const textBlock = new TextBlock().start();
        const mobileImgBlock = new MobileImgBlock().start();
        textAndImg.append(textBlock, mobileImgBlock);
        header.append(navigation, textAndImg);
        return header;
    }
}

export default Header;
