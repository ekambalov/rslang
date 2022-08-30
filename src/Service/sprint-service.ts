import Observer from '../Abstract/observer';

export default class SprintService extends Observer {
  endTimeGame = false;

  idTimerGame: NodeJS.Timer | undefined;

  repeatGame = () => {
    clearInterval(this.idTimerGame as NodeJS.Timer);
    this.startGameSprint();
  };

  exitGameSprint = () => {
    this.dispath('enter-game-sprint'); // выход из игры
  };

  hideRuleSprint = () => {
    this.dispath('hide-rule-sprint'); // прячем правила игры
  };

  showRuleSprint = () => {
    this.dispath('show-rule-sprint'); // показываем правила игры
  };

  showFiledGame = () => {
    this.dispath('show-filed-game'); // показываем поле игры
  };

  hideFileGame = () => {
    this.dispath('hide-filed-game'); // прячем поле игры
  };

  playAudioWord = () => {
    this.dispath('play-audio-word'); // произношение слова
  };

  stopAudioWord = () => {
    this.dispath('stop-audio-word'); // произношение слова
  };

  startGameSprint = () => {
    this.dispath('start-timer'); // запускаем таймер
    this.hideRuleSprint();
    this.showFiledGame();
    this.resetTimerAndCount();
    this.endTimeGame = false;
  };

  resetTimerAndCount = () => {
    this.dispath('reset-timer');
    this.dispath('reset-count-game');
  };

  resetTimer = () => {
    this.dispath('reset-timer'); // сбрасываем таймер
  };

  resetCountGame = () => {
    this.dispath('reset-count-game'); // сбрасываем счёт игры
  };

  timer = (element: HTMLElement) => {
    let seconds = 60;
    const timerGame = setInterval(
      (el: HTMLElement) => {
        // eslint-disable-next-line no-param-reassign
        el.innerHTML = `${seconds}`;
        seconds -= 1;
        if (seconds < 0) {
          clearInterval(timerGame);
          this.endTimeGame = true;
        }
      },
      1000,
      element
    );
    this.idTimerGame = timerGame;
    console.log(typeof timerGame);
  };
}
