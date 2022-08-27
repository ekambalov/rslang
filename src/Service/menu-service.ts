import Observer from '../Abstract/observer';
import { IMenuServise } from '../Interfaces/interfaces';

export default class MenuService extends Observer implements IMenuServise {
  openMenu = (): void => {
    this.dispath('open-menu');
  };

  closeMenu = (): void => {
    this.dispath('close-menu');
  };

  showDarkLayer = (): void => {
    this.dispath('show-dark-layer');
  };

  removeDarkLayer = (): void => {
    this.dispath('remove-dark-layer');
  };
}
