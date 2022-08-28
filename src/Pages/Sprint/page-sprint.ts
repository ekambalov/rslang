import Services from '../../Service/service';
import BaseComponent from '../../Abstract/base-component';
// import State from '../../model/state';
// import { getWords } from '../../model/getTextbook';
// import { Word } from '../../Interfaces/word-model';
// import TextBookCart from '../../components/textbook-cart';
// import ButtonWithCallback from '../../components/button-with-callback';

export default class SprintPage extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('section', 'sprint');
  }

  render = () => {
    this.parent.innerHTML = ''; // clear the main section
    this.element.innerHTML = ''; // clear the main section
    const container = new BaseComponent('div', 'sprint-container').element;

    const btnReturn = new BaseComponent('a', 'spint_btn-exit-game').element;
    btnReturn.innerText = 'X';
    btnReturn.setAttribute('href', `#/main`);
    container.append(btnReturn);
    this.element.append(container);
    this.parent.appendChild(container);
  };
}
