import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';
import Slider from './slider';

export default class LeftContainerMain extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'main__left-container');
  }

  render = () => {
    const titleH1 = new BaseComponent('h1', 'title').element;
    titleH1.innerHTML = 'RS Lang';
    this.element.append(titleH1);
    new Slider(this.element, this.services).render();
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
