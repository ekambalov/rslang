import Header from '../../Components/header';
import Services from '../../Service/service';

export default class MainPage {
  constructor(private parent: HTMLElement, private services: Services) {}

  render = () => {
    new Header(this.parent, this.services).render();
  };
}
