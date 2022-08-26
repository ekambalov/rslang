import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
//  import State from '../model/state';

export default class NameUser extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('p', 'header__txt_name-user');
  }

  render = () => {
    this.element.textContent = localStorage.getItem('state')
      ? JSON.parse(localStorage.getItem('state') as string).userItem.name
      : '';

    this.services.form.add('show-user-name', this.showNameUser);
    this.parent.appendChild(this.element);
  };

  showNameUser = () => {
    this.element.innerHTML = this.services.form.user.name;
  };
}
