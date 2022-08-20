import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';
import LeftContainerMain from './left-container-main';
import RightContainerMain from './right-container-main';

export default class Main extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('main', 'main');
  }

  render = () => {
    new LeftContainerMain(this.element, this.services).render();
    new RightContainerMain(this.element, this.services).render();
    this.parent.appendChild(this.element);
  };
}
// import './main.scss';
// import { IComponent } from '../../Components/view/Interfase-component';
// import TextBlock from './text-Block';
// import { createDiv } from '../../utils/HTML-Builder';
// import MobileImgBlock from './mobile-img-block';
// class Main implements IComponent {
//     start(): HTMLDivElement {
//         const main = createDiv(['main']);
//         const textBlock = new TextBlock().start();
//         const mobileImgBlock = new MobileImgBlock().start();
//         main.append(textBlock, mobileImgBlock);
//         return main;
//     }
// }

// export default Main;
