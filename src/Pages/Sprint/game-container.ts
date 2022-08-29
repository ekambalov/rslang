import Services from '../../Service/service';
import BaseComponent from '../../Abstract/base-component';
import HeaderGame from './game-header';
import RuleGame from './game-rule';

export default class GameContainer extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'game-container');
  }

  render = () => {
    new HeaderGame(this.element, this.services).render();
    new RuleGame(this.element, this.services).render();
    this.parent.appendChild(this.element);
  };
}
