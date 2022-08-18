import './main.scss';
import { IComponent } from '../../Interfase-component';
import TextBlock from './TextBlock/text-Block';
import { createDiv } from '../../../../utils/HTML-Builder';
import MobileImgBlock from './MobileImgBlock/mobile-img-block';

class Main implements IComponent {
    start(): HTMLDivElement {
        const main = createDiv(['main']);
        const textBlock = new TextBlock().start();
        const mobileImgBlock = new MobileImgBlock().start();
        main.append(textBlock, mobileImgBlock);
        return main;
    }
}

export default Main;
