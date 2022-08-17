import { createImg, createText } from '../../../../utils/HTMLBuilder';
import { IComponentUl } from '../../InterfaseComponent';

const anchorGitHub = ['https://github.com/nikimix', 'https://github.com/SmSka2021', 'https://github.com/ekambalov'];
const name = ['Никита', 'Светлана', 'Егор'];
const work = ['frontend developer', 'frontend developer', 'frontend developer'];

class CardTeam implements IComponentUl {
    start(): HTMLUListElement {
        const cardsUL = document.createElement('ul') as HTMLUListElement;
        cardsUL.classList.add('cards');

        for (let i = 0; i < anchorGitHub.length; i += 1) {
            const cardLI = document.createElement('li') as HTMLLIElement;
            cardLI.classList.add(`cards_card${i}`);

            const imgPerson = createImg('../../../../assets/img/unnamed.png', 'foto autor', ['cards__card_imgTeam']);
            const namePerson = createText(`${name[i]}`, 'h3', ['cards__card_name']);
            const workPerson = createText(`${work[i]}`, 'h4', ['cards__card_work']);

            const anchorNav = document.createElement('a') as HTMLAnchorElement;
            anchorNav.classList.add('cards__card_link');
            anchorNav.href = anchorGitHub[i];

            const imgGitHub = createImg('../../../../assets/img/github.png', 'logotip github', [
                'cards__card_imgGitHub',
            ]);
            anchorNav.append(imgGitHub);

            cardLI.append(imgPerson, namePerson, workPerson, anchorNav);

            cardsUL.append(cardLI);
        }
        return cardsUL;
    }
}

export default CardTeam;
