import MainPage from '../Pages/Main/page';
import Services from '../Service/service';
import TeamPage from '../Pages/AboutTeam/page';

type Page = MainPage | TeamPage;

interface RoutesInterface {
  path: string;
  component: Page;
}

export default class Router {
  private readonly routes: RoutesInterface[];

  constructor(private readonly root: HTMLElement, private readonly services: Services) {
    this.routes = [
      { path: '/main', component: new MainPage(this.root, this.services) },
      { path: '/authors', component: new TeamPage(this.root, this.services) },
    ];
  }

  render(): void {
    window.addEventListener('hashchange', this.rounting.bind(this));
    window.addEventListener('load', this.rounting.bind(this));
  }

  rounting(): void {
    const path = document.location.hash.slice(1).toLowerCase() || '/about';
    // if (path !== '/game') this.services.game.break();

    this.services.router.setRouter(path);
    const currentRount = this.routes.find((item) => item.path === path) || this.routes[0];
    currentRount.component.render();
  }
}
