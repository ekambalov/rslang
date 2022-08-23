import Services from './Service/service';
import RouterService from './Service/router-service';
import MenuService from './Service/menu-service';
import BaseComponent from './Abstract/base-component';
import Router from './components/router';
import Header from './components/header';
import Footer from './components/footer';
import FormService from './Service/form-service';
import DataBaseServices from './Service/data-base-service';
import TextbookService from './Service/textbook-service';

class App {
  private services: Services;

  constructor(private readonly root: HTMLElement) {
    this.services = {
      menu: new MenuService(),
      router: new RouterService(),
      form: new FormService(),
      dataBase: new DataBaseServices(),
      textbook: new TextbookService(),
    };
  }

  render(): void {
    new Header(this.root, this.services).render();

    const main = new BaseComponent('main').element;
    this.root.appendChild(main);

    new Router(main, this.services).render();
    new Footer(this.root, this.services).render();
  }
}

export default App;
