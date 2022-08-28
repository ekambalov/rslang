import Observer from '../Abstract/observer';

export default class SprintService extends Observer {
  exitGameSprint = () => {
    this.dispath('enter-game-sprint');
  };
}
