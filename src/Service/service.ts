import MenuService from './menu-service';
import RouterService from './router-service';
// eslint-disable-next-line import/no-cycle
import DataBaseServices from './data-base-service';
import FormService from './form-service';
import AudioCallService from './audio-call';

export default interface Services {
  menu: MenuService;
  router: RouterService;
  dataBase: DataBaseServices;
  form: FormService;
  audioCall: AudioCallService;
}
