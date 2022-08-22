import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';
import CardsTeam from './cards-team';

export default class Team extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('main', 'team-page');
  }

  render = () => {
    const h2Txt = new BaseComponent('h2', 'teamPage__title').element;
    h2Txt.innerHTML = 'Our Team';
    new CardsTeam(this.element, this.services).render();
    const btnReturn = new BaseComponent('button', 'teamPage__button_return').element;
    btnReturn.innerText = 'return';
    btnReturn.setAttribute('type', 'button');
    this.element.prepend(h2Txt, btnReturn);
    this.element.append(btnReturn);
    this.parent.append(this.element);
  };
}
