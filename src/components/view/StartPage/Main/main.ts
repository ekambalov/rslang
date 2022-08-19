import './main.scss';
import { IComponent } from '../../Interfase-component';
import TextBlock from './TextBlock/text-Block';
import MobileImgBlock from './MobileImgBlock/mobile-img-block';

class Main implements IComponent<HTMLElement> {
    start(): HTMLElement {
        const main = document.createElement('main');
        main.classList.add('main');
        const textBlock = new TextBlock().start();
        const mobileImgBlock = new MobileImgBlock().start();
        main.append(textBlock, mobileImgBlock);
        return main;
    }
}

export default Main;
