import MenuService from './menu-service';
import RouterService from './router-service';
import SliderService from './slider-service';

export default interface Services {
  menu: MenuService;
  router: RouterService;
  slider: SliderService;
}
