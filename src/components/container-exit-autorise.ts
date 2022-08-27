import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import ButtonWithCallback from './button-with-callback';
import NameUser from './name-user';

export default class ContainerExitAutorise extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'header_container-autorise');
  }

  render = () => {
    new NameUser(this.element, this.services).render();
    new ButtonWithCallback(
      this.element,
      this.services,
      'header__btn_exit-autorise',
      '',
      'button',
      this.services.form.hideExitAutorise
    ).render();
    this.parent.appendChild(this.element);
    this.services.form.add('show-exit-autorise', this.showExitAutorise);
    this.services.form.add('hide-exit-autorise', this.hideExitAutorise);
  };

  showExitAutorise = () => {
    this.element.style.display = 'flex';
  };

  hideExitAutorise = () => {
    this.element.style.display = 'none';
    this.services.form.showBtnAutorise();
    localStorage.clear();
    // this.services.form.deleteUser();
  };
}
