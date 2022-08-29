import Observer from '../Abstract/observer';

export default class SprintService extends Observer {
  endTimeGame = false;

  exitGameSprint = () => {
    this.dispath('enter-game-sprint'); // выход из игры
  };

  hideRuleSprint = () => {
    this.dispath('hide-rule-sprint'); // прячем правила игры
  };

  showRuleSprint = () => {
    this.dispath('show-rule-sprint'); // показываем правила игры
  };

  startTimer = () => {
    this.dispath('start-timer'); // запускаем таймер
    this.hideRuleSprint();
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
  };
}
