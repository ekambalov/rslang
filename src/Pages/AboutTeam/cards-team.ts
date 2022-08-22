import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';
import avatar from '../../Settings/avatar-team-page.json';
import linksProps from '../../Settings/link-person-gitHub.json';
import LinkGitHub from '../../components/link-GitHub';

const name = ['Никита', 'Светлана', 'Ягор'];
const work = ['frontend developer', 'frontend developer', 'frontend developer'];

export default class CardsTeam extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('ul', 'cards-team');
  }

  render = () => {
    for (let i = 0; i < avatar.length; i += 1) {
      const cardPerson = new BaseComponent('li', `cards-team__card`).element;
      cardPerson.classList.add(`cards-team__card${i}`);
      const cardAvatar = new BaseComponent('div', 'cards-team__card_avatar').element;
      cardAvatar.classList.add(`avatar${i}`);
      const namePerson = new BaseComponent('h3', `cards-team__card_name-person`).element;
      namePerson.innerHTML = name[i];
      const workPerson = new BaseComponent('h4', 'cards-team__card_work').element;
      workPerson.innerHTML = work[i];
      new LinkGitHub(
        cardPerson,
        this.services,
        linksProps[i],
        'cards-team__linkGithub',
        'cards-team__linkGithub_img',
        'black'
      ).render();
      cardPerson.prepend(cardAvatar, namePerson, workPerson);
      this.element.append(cardPerson);
    }

    this.parent.appendChild(this.element);
  };
}
