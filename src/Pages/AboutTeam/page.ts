// import Header from '../../Components/header';
import Services from '../../Service/service';
// import Footer from '../../components/footer';
import Team from './team';

export default class TeamPage {
  constructor(private parent: HTMLElement, private services: Services) {}

  render = () => {
    // new Header(this.parent, this.services).render();
    this.parent.innerHTML = '';
    new Team(this.parent, this.services).render();
    // new Footer(this.parent, this.services).render();
  };
}
