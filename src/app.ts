import Services from './Service/service';
import RouterService from './Service/router-service';
import MenuService from './Service/menu-service';
import BaseComponent from './Abstract/base-component';
import Router from './Components/router';
import Header from './Components/header';
import Footer from './Components/footer';
import FormService from './Service/form-service';
import DataBaseServices from './Service/data-base-service';
import AudioCallService from './Service/audio-call';
import TextbookService from './Service/textbook-service';
import SprintService from './Service/sprint-service';

class App {
  private services: Services;

  constructor(private readonly root: HTMLElement) {
    this.services = {
      menu: new MenuService(),
      router: new RouterService(),
      form: new FormService(),
      dataBase: new DataBaseServices(),
      audioCall: new AudioCallService(),
      textbook: new TextbookService(),
      sprint: new SprintService(),
    };
  }

  render(): void {
    new Header(this.root, this.services).render();

    const main = new BaseComponent('main').element;
    this.root.appendChild(main);

    new Router(main, this.services).render();
    new Footer(this.root, this.services).render();
    window.addEventListener('load', this.services.form.loadWindow);
  }
}

export default App;
