import { IComponent } from '../../InterfaseComponent';
import { createDiv } from '../../../../utils/HTMLBuilder';

class MobileImgBlock implements IComponent {
    start(): HTMLDivElement {
        const mobileImgBlock = createDiv(['header__mobileImgBlock']);

        const bookImgBlock = createDiv(['header__mobileImgBlock_book']);
        bookImgBlock.innerHTML = 'учебник';

        const audioImgBlock = createDiv(['header__mobileImgBlock_audio']);
        audioImgBlock.innerHTML = 'аудиовызов';

        const sprintImgBlock = createDiv(['header__mobileImgBlock_sprint']);
        sprintImgBlock.innerHTML = 'спринт';

        const statistictImgBlock = createDiv(['header__mobileImgBlock_statictic']);
        statistictImgBlock.innerHTML = 'статистика';

        const autorizeImgBlock = createDiv(['header__mobileImgBlock_autorize']);
        autorizeImgBlock.innerHTML = 'авторизация';

        const autorsImgBlock = createDiv(['header__mobileImgBlock_autor']);
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
