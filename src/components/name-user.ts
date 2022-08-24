import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import State from '../model/state';

export default class NameUser extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('p', 'header__txt_name-user');
  }

  render = () => {
    if (localStorage.getItem('state')) {
      this.element.textContent = JSON.parse(localStorage.getItem('state') as string).userItem.name;
    } else {
      this.element.textContent = State.userInfoAutorise.name;
    }
    this.element.textContent = State.userItem.name;
    this.parent.appendChild(this.element);
    // this.services.form.add('show-user-name', this.showNameUser);
  };

  // showNameUser = () => {
  //  this.element.innerHTML = `${name}`;
  // };
}
