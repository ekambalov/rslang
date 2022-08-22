import MenuService from './menu-service';
import RouterService from './router-service';
import DataBaseServices from './data-base-service';

export default interface Services {
  menu: MenuService;
  router: RouterService;
  dataBase: DataBaseServices;
}
