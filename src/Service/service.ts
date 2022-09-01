import MenuService from './menu-service';
import RouterService from './router-service';
import FormService from './form-service';
import AudioCallService from './audio-call';
import TextbookService from './textbook-service';
import SprintService from './sprint-service';
import LevelSelectionService from './level-selection';

export default interface Services {
  menu: MenuService;
  router: RouterService;
  levelSelection: LevelSelectionService;
  form: FormService;
  audioCall: AudioCallService;
  textbook: TextbookService;
  sprint: SprintService;
}
