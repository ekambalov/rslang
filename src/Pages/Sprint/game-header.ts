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
    count.innerText = '0';
    new Timer(this.element, this.services).render();
    new ButtonWithCallback(
      this.element,
      this.services,
      'game-header__btn-repeat',
      '',
      'button',
      this.services.sprint.repeatGame
    ).render();
    this.element.append(count);
    this.parent.appendChild(this.element);
    this.services.sprint.add('reset-count-game', this.resetCount);
  };

  resetCount = () => {
    this.element.children[2].textContent = '0';
  };
}
