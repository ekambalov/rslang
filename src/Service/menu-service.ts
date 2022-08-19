import Observer from '../Abstract/observer';

export default class MenuService extends Observer {
  openMenu = () => {
    this.dispath('open-menu');
  };

  closeMenu = () => {
    this.dispath('close-menu');
  };
}
