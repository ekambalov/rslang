import Services from '../../Service/service';
import BaseComponent from '../../Abstract/base-component';
// import State from '../../model/state';
// import { getWords } from '../../model/getTextbook';
// import { Word } from '../../Interfaces/word-model';
// import TextBookCart from '../../components/textbook-cart';
// import ButtonWithCallback from '../../components/button-with-callback';
import Timer from './game-timer';

export default class HeaderGame extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'game__header');
  }

  render = () => {
    const count = new BaseComponent('h6', 'game-header__count').element;
    count.innerText = '0';
    new Timer(this.element, this.services).render();
    this.element.append(count);
    this.parent.appendChild(this.element);
    this.services.sprint.add('reset-count-game', this.resetCount);
  };

  resetCount = () => {
    this.element.childNodes[0].textContent = '0';
  };
}
