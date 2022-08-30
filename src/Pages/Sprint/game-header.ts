import Services from '../../Service/service';
import BaseComponent from '../../Abstract/base-component';
import Timer from './game-timer';
import ButtonWithCallback from '../../components/button-with-callback';

export default class HeaderGame extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'game__header');
  }

  render = () => {
    const count = new BaseComponent('h6', 'game-header__count').element;
    count.innerHTML = '0';
    const countAdd = new BaseComponent('p', 'game-header__count-add').element;
    countAdd.innerHTML = '+10';
    new Timer(this.element, this.services).render();
    new ButtonWithCallback(
      this.element,
      this.services,
      'game-header__btn-repeat',
      '',
      'button',
      this.services.sprint.repeatGame
    ).render();
    this.element.append(countAdd, count);
    this.parent.appendChild(this.element);
    this.services.sprint.add('reset-count-game', this.resetCount);
    this.services.sprint.add('add-count-game', this.addCount);
    this.services.sprint.add('add-count-game-reset', this.addCountReset);
  };

  resetCount = () => {
    this.element.children[3].innerHTML = '0';
    this.element.children[2].innerHTML = '+10';
  };

  addCountReset = () => {
    this.element.children[2].innerHTML = '+10';
  };

  addCount = () => {
    const count = +(this.element.children[3].textContent as string);
    if (this.services.sprint.countTrueAnsve > 3 && this.services.sprint.countTrueAnsve <= 6) {
      this.element.children[3].innerHTML = `${count + 20}`;
      this.element.children[2].innerHTML = '+20';
      this.services.sprint.userResult += 20;
      console.log(this.services.sprint.userResult);
    }
    if (this.services.sprint.countTrueAnsve > 6) {
      this.element.children[3].innerHTML = `${count + 30}`;
      this.element.children[2].innerHTML = '+30';
      this.services.sprint.userResult += 30;
    }
    if (this.services.sprint.countTrueAnsve <= 3) {
      this.element.children[3].innerHTML = `${count + 10}`;
      this.element.children[2].innerHTML = '+10';
      this.services.sprint.userResult += 10;
    }
  };
}
