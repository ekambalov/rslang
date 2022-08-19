import TeamPage from '../view/AboutTeam/team';
import FormBlock from '../view/AutoriseForm/autorise-form';

import MobileImgBlock from '../view/StartPage/Main/MobileImgBlock/mobile-img-block';
import Main from '../view/StartPage/Main/main';

export class Router {
    pageTeam = new TeamPage().start();

    mobileImgBlock = new MobileImgBlock().start();

    pageStart = new Main().start();

    formAutorise = new FormBlock().start();

    showTeamPage(): void {
        document.querySelector('main')?.replaceWith?.(this.pageTeam);
    }

    showStartPage(): void {
        document.querySelector('main')?.replaceWith?.(this.pageStart);
    }

    showFormAutorise(): void {
        document.querySelector('.main__mobileImgBlock')?.replaceWith?.(this.formAutorise);
    }
}
export default Router;
