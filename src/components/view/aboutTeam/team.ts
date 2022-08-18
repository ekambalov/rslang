import './team.scss';
import { IComponent } from '../Interfase-component';
import { createDiv, createBtn, createText } from '../../../utils/HTML-Builder';
import CardTeam from './Card/card';

class TeamPage implements IComponent {
    start(): HTMLDivElement {
        const teamPage = createDiv(['teamPage']);
        const h2Txt = createText('Our Team', 'h2', ['teamPage__txt']);
        const btnReturn = createBtn('return', ['teamPage__btn']);
        const teamCards = createDiv(['teamPage__cards']);

        const cardsUlTeam = new CardTeam().start();
        teamCards.append(cardsUlTeam);
        teamPage.append(h2Txt, teamCards, btnReturn);

        return teamPage;
    }
}

export default TeamPage;
