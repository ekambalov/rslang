import MainPage from '../Pages/Main/page';
import Services from '../Service/service';
import TeamPage from '../Pages/AboutTeam/page';
import AudioCall from '../Pages/AudioCall/page';
import LevelSelection from '../Pages/LevelSelection/page';

type Page = MainPage | TeamPage | AudioCall | LevelSelection;

interface RoutesInterface {
  path: string;
  component: Page;
}

export default class Router {
  private readonly routes: RoutesInterface[];

  constructor(private readonly root: HTMLElement, private readonly services: Services) {
    this.routes = [
      { path: '/main', component: new MainPage(this.root, this.services) },
      { path: '/audio-call', component: new AudioCall(this.root, this.services) },
      { path: '/authors', component: new TeamPage(this.root, this.services) },
      { path: '/level-selection', component: new LevelSelection(this.root, this.services) },
    ];
  }

  render = (): void => {
    window.addEventListener('hashchange', this.routing);
    window.addEventListener('load', this.routing);
  };

  routing = (): void => {
    debugger;
    const path = document.location.hash.slice(1).toLowerCase() || '#/main';
    this.services.router.setRouter(path);
    const currentRout = this.routes.find((item) => item.path === path) || this.routes[0];
    currentRout.component.render();
  };
}
