import Observer from '../Abstract/observer';
import { IRouterService } from '../interfaces/interfaces';

export default class RouterService extends Observer implements IRouterService {
  router = '';

  setRouter(router: string): void {
    this.router = router;
    this.dispath('router', this.router);
  }
}
