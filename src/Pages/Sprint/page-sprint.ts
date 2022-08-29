import Services from '../../Service/service';
import BaseComponent from '../../Abstract/base-component';
// import State from '../../model/state';
// import { getWords } from '../../model/getTextbook';
// import { Word } from '../../Interfaces/word-model';
// import TextBookCart from '../../components/textbook-cart';
// import ButtonWithCallback from '../../components/button-with-callback';
import GameContainer from './game-container';

export default class SprintPage extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('section', 'sprint');
  }

  render = () => {
    this.parent.innerHTML = ''; // clear the main section
    this.element.innerHTML = ''; // clear the main section
    const btnReturn = new BaseComponent('a', 'spint_btn-exit-game').element;
    btnReturn.innerText = 'X';
    btnReturn.setAttribute('href', `#/main`);
    this.element.prepend(btnReturn);
    new GameContainer(this.element, this.services).render();
    this.parent.appendChild(this.element);
  };
}
