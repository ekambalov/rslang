import Services from '../../Service/service';
import BaseComponent from '../../Abstract/base-component';
// import State from '../../model/state';
// import { getWords } from '../../model/getTextbook';
// import { Word } from '../../Interfaces/word-model';
// import TextBookCart from '../../components/textbook-cart';
// import ButtonWithCallback from '../../components/button-with-callback';

export default class Timer extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('h6', 'game-header__timer');
  }

  render = () => {
    this.element.textContent = '60';
    this.parent.appendChild(this.element);
    this.services.sprint.add('start-timer', this.startTimer);
    this.services.sprint.add('reset-timer', this.resetTimer);
  };

  startTimer = () => {
    this.services.sprint.timer(this.element);
  };

  resetTimer = () => {
    this.element.innerHTML = '60';
  };
}
