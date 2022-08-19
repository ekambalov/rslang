import './team.scss';
import { IComponent } from '../Interfase-component';
import { createDiv, createBtn, createText } from '../../../utils/HTML-Builder';
import CardTeam from './Card/card';

class TeamPage implements IComponent<HTMLElement> {
    start(): HTMLElement {
        const main = document.createElement('main');
        const teamPage = createDiv(['teamPage']);
        const h2Txt = createText('Our Team', 'h2', ['teamPage__txt']);
        const btnReturn = createBtn('return', ['teamPage__btn']);
        const teamCards = createDiv(['teamPage__cards']);

        const cardsUlTeam = new CardTeam().start();
        teamCards.append(cardsUlTeam);
        teamPage.append(h2Txt, teamCards, btnReturn);
        main.append(teamPage);
        return main;
    }
}

export default TeamPage;
