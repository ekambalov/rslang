import Observer from '../Abstract/observer';

export default class MenuService extends Observer {
  openMenu = () => {
    this.dispath('open-menu');
  };

  closeMenu = () => {
    this.dispath('close-menu');
  };

  openAutoriseForm = () => {
    this.dispath('open-autorise');
  };

  closeAutoriseForm = () => {
    this.dispath('close-autorise');
  };

  showDarkLayer = () => {
    this.dispath('show-dark-layer');
  };

  removeDarkLayer = () => {
    this.dispath('remove-dark-layer');
  };
}
