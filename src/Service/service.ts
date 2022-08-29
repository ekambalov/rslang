import MenuService from './menu-service';
import RouterService from './router-service';
import DataBaseServices from './data-base-service';
import FormService from './form-service';
import AudioCallService from './audio-call';
import TextbookService from './textbook-service';
import SprintService from './sprint-service';

export default interface Services {
  menu: MenuService;
  router: RouterService;
  dataBase: DataBaseServices;
  form: FormService;
  audioCall: AudioCallService;
  textbook: TextbookService;
  sprint: SprintService;
}
