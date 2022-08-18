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
        document.querySelector('.main')?.replaceWith?.(this.pageTeam);
    }

    showStartPage(): void {
        if (document.querySelector('.teamPage')) {
            document.querySelector('.teamPage')?.replaceWith?.(this.pageStart);
        }
        if (document.querySelector('.main__formBlock')) {
            document.querySelector('.main__formBlock')?.replaceWith?.(this.mobileImgBlock);
        }
    }

    showFormAutorise(): void {
        document.querySelector('.main__mobileImgBlock')?.replaceWith?.(this.formAutorise);
    }
}
export default Router;
