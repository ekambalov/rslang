import { IComponent } from '../../../Interfase-component';
import { createDiv } from '../../../../../utils/HTML-Builder';

class MobileImgBlock implements IComponent {
    start(): HTMLDivElement {
        const mobileImgBlock = createDiv(['main__mobileImgBlock']);

        const bookImgBlock = createDiv(['main__mobileImgBlock_book']);
        bookImgBlock.innerHTML = 'учебник';

        const audioImgBlock = createDiv(['main__mobileImgBlock_audio']);
        audioImgBlock.innerHTML = 'аудиовызов';

        const sprintImgBlock = createDiv(['main__mobileImgBlock_sprint']);
        sprintImgBlock.innerHTML = 'спринт';

        const statistictImgBlock = createDiv(['main__mobileImgBlock_statictic']);
        statistictImgBlock.innerHTML = 'статистика';

        const autorizeImgBlock = createDiv(['main__mobileImgBlock_autorize']);
        autorizeImgBlock.innerHTML = 'авторизация';

        const autorsImgBlock = createDiv(['main__mobileImgBlock_autor']);
        autorsImgBlock.innerHTML = 'об авторах';

        mobileImgBlock.append(
            bookImgBlock,
            audioImgBlock,
            sprintImgBlock,
            statistictImgBlock,
            autorizeImgBlock,
            autorsImgBlock
        );
        return mobileImgBlock;
    }
}

export default MobileImgBlock;
