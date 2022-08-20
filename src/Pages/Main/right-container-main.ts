import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';
import buttonLinkProps from '../../Settings/button-menu.json';
import ButtonLink from './button-main-link';

export default class RightContainerMain extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'main__right-container');
  }

  render = () => {
    const ContainerButtonLink = new BaseComponent('div', 'containerButton').element;
    buttonLinkProps.forEach((link) => new ButtonLink(ContainerButtonLink, this.services, link).render());
    this.element.append(ContainerButtonLink);
    this.parent.appendChild(this.element);
  };
}
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
