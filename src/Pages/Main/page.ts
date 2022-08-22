import Header from '../../Components/header';
import Services from '../../Service/service';
import Main from './main';
import Footer from '../../components/footer';
import Team from '../AboutTeam/team';

export default class MainPage {
  constructor(private parent: HTMLElement, private services: Services) {}

  render = () => {
    new Header(this.parent, this.services).render();
    new Main(this.parent, this.services).render();
    new Footer(this.parent, this.services).render();
  };

  renderTeamPage = () => {
    new Header(this.parent, this.services).render();
    new Team(this.parent, this.services).render();
    new Footer(this.parent, this.services).render();
  };
}
