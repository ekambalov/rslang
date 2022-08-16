import { IComponent } from '../../InterfaseComponent';
import Slider from './slider/slider';
import { createDiv, createText } from '../../../../utils/HTMLBuilder';

class TextBlock implements IComponent {
    start(): HTMLDivElement {
        const textBlock = createDiv(['header__textBlock']);
        const h1Txt = createText('RS Lang', 'h1', ['header__textBlock_h1']);
        textBlock.append(h1Txt);
        const slider = new Slider().start();
        textBlock.append(h1Txt, slider);

        return textBlock;
    }
}

export default TextBlock;
