import TeamPage from '../view/aboutTeam/team';
import Header from '../view/startPage/header';

export class Router {
    pageTeam = new TeamPage().start();

    pageStart = new Header().start();

    showTeamPage(): void {
        document.querySelector('.header')?.replaceWith?.(this.pageTeam);
        document.location.hash = 'aboutTeam';
    }

    showStartPage(): void {
        document.querySelector('.teamPage')?.replaceWith?.(this.pageStart);
        document.location.hash = '';
        document.location.hash = document.location.hash.replace('#', '');
    }
}
export default Router;
