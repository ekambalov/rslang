import Observer from '../Abstract/observer';

export default class RouterService extends Observer {
  router = '';

  setRouter(router: string): void {
    this.router = router;
    this.dispath('router', this.router);
  }
}
