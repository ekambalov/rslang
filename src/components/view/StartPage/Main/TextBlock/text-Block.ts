import { IComponent } from '../../../Interfase-component';

import { createDiv, createText } from '../../../../../utils/HTML-Builder';
import Slider from './Slider/slider';

class TextBlock implements IComponent {
    start(): HTMLDivElement {
        const textBlock = createDiv(['main__textBlock']);
        const h1Txt = createText('RS Lang', 'h1', ['main__textBlock_h1']);
        textBlock.append(h1Txt);
        const slider = new Slider().start();
        textBlock.append(h1Txt, slider);

        return textBlock;
    }
}

export default TextBlock;
