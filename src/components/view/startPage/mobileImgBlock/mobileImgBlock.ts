import { IComponent } from '../../InterfaseComponent';

class MobileImgBlock implements IComponent {
    start(): HTMLDivElement {
        const mobileImgBlock = document.createElement('div') as HTMLDivElement;
        mobileImgBlock.classList.add('header__mobileImgBlock');

        const bookImgBlock = document.createElement('div') as HTMLDivElement;
        bookImgBlock.classList.add('header__mobileImgBlock_book');
        bookImgBlock.innerHTML = 'учебник';

        const audioImgBlock = document.createElement('div') as HTMLDivElement;
        audioImgBlock.classList.add('header__mobileImgBlock_audio');
        audioImgBlock.innerHTML = 'аудиовызов';

        const sprintImgBlock = document.createElement('div') as HTMLDivElement;
        sprintImgBlock.classList.add('header__mobileImgBlock_sprint');
        sprintImgBlock.innerHTML = 'спринт';

        const statistictImgBlock = document.createElement('div') as HTMLDivElement;
        statistictImgBlock.classList.add('header__mobileImgBlock_statictic');
        statistictImgBlock.innerHTML = 'статистика';

        const autorizeImgBlock = document.createElement('div') as HTMLDivElement;
        autorizeImgBlock.classList.add('header__mobileImgBlock_autorize');
        autorizeImgBlock.innerHTML = 'авторизация';

        const autorsImgBlock = document.createElement('div') as HTMLDivElement;
        autorsImgBlock.classList.add('header__mobileImgBlock_autor');
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
