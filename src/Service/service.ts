import MenuService from './menu-service';
import RouterService from './router-service';
import DataBaseServices from './data-base-service';
import FormService from './form-service';
import TextbookService from './textbook-service';

export default interface Services {
  menu: MenuService;
  router: RouterService;
  dataBase: DataBaseServices;
  form: FormService;
  textbook: TextbookService;
}
