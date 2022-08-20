// import BaseComponent from '../../Abstract/base-component';
// import sliderTextFile from '../../Settings/slider-text.json';
//  import Services from '../../Service/service';

// export default class Slider extends BaseComponent {
//   constructor(private readonly parent: HTMLElement, private readonly services: Services) {
//    super('div', 'slider');
//   }

//  render = () => {
//    const sliderTextContainer = new BaseComponent('div', 'slider__text-container').element;
//    const sliderDotsContainer = new BaseComponent('div', 'slider__dots-container').element;
//  }
// }

// import { IComponent } from '../../Components/view/Interfase-component';
// import { createDiv } from '../../utils/HTML-Builder';

// class MobileImgBlock implements IComponent {
//     start(): HTMLDivElement {
//         const mobileImgBlock = createDiv(['main__mobileImgBlock']);

//         const bookImgBlock = createDiv(['main__mobileImgBlock_book']);
//         bookImgBlock.innerHTML = 'учебник';

//         const audioImgBlock = createDiv(['main__mobileImgBlock_audio']);
//         audioImgBlock.innerHTML = 'аудиовызов';

//         const sprintImgBlock = createDiv(['main__mobileImgBlock_sprint']);
//         sprintImgBlock.innerHTML = 'спринт';

//         const statistictImgBlock = createDiv(['main__mobileImgBlock_statictic']);
//         statistictImgBlock.innerHTML = 'статистика';

//         const autorizeImgBlock = createDiv(['main__mobileImgBlock_autorize']);
//         autorizeImgBlock.innerHTML = 'авторизация';

//         const autorsImgBlock = createDiv(['main__mobileImgBlock_autor']);
//         autorsImgBlock.innerHTML = 'об авторах';

//         mobileImgBlock.append(
//             bookImgBlock,
//             audioImgBlock,
//             sprintImgBlock,
//             statistictImgBlock,
//             autorizeImgBlock,
//             autorsImgBlock
//         );
//         return mobileImgBlock;
//     }
// }

// export default MobileImgBlock;
