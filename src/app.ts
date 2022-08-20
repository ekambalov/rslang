import Services from './Service/service';
import RouterService from './Service/router-service';
import MenuService from './Service/menu-service';
import MainPage from './Pages/Main/page';
import SliderService from './Service/slider-service';

class App {
  private services: Services;

  constructor(private readonly root: HTMLElement) {
    this.services = {
      menu: new MenuService(),
      router: new RouterService(),
      slider: new SliderService(),
    };
  }

  render(): void {
    new MainPage(this.root, this.services).render();
  }
}

export default App;
