import { IComponent } from '../../InterfaseComponent';
import Slider from './slider/slider';

class TextBlock implements IComponent {
    start(): HTMLDivElement {
        const textBlock = document.createElement('div') as HTMLDivElement;
        textBlock.classList.add('header__textBlock');

        const h1Txt = document.createElement('h1') as HTMLHeadingElement;
        h1Txt.classList.add('header__textBlock_h1');
        h1Txt.innerHTML = 'RS Lang';
        textBlock.append(h1Txt);
        const slider = new Slider().start();
        textBlock.append(h1Txt, slider);

        return textBlock;
    }
}

export default TextBlock;
