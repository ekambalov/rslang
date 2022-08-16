import './header.scss';
import { IComponent } from '../InterfaseComponent';
import Navigation from './navigation/navigation';
import TextBlock from './textBlock/textBlock';
import MobileImgBlock from './mobileImgBlock/mobileImgBlock';
import { createDiv } from '../../../utils/HTMLBuilder';

class Header implements IComponent {
    start(): HTMLDivElement {
        const header = createDiv(['header']);
        const navigation = new Navigation().start();
        const textAndImg = createDiv(['header__textAndImg']);
        const textBlock = new TextBlock().start();
        const mobileImgBlock = new MobileImgBlock().start();
        textAndImg.append(textBlock, mobileImgBlock);
        header.append(navigation, textAndImg);
        return header;
    }
}

export default Header;
