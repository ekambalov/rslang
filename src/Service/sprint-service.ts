import Observer from '../Abstract/observer';

export default class SprintService extends Observer {
  endTimeGame = false; // закончилось время таймера

  countTrueAnsve = 0; // количество правильных ответов подряд

  userResult = 0; // количество набранных очков

  translate = true; //  показывается правильный ответ

  clickButtonTrue = false; // нажата ли кнопка верно

  clickButtonFalse = false; // нажата ли кнопка неверно

  stopAudioError = false; // нажата ли кнопка отмены звукового сигнала

  idTimerGame: NodeJS.Timer | undefined; // ID таймера для его остановки;

  repeatGame = () => {
    clearInterval(this.idTimerGame as NodeJS.Timer); // перезапуск игры
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
    this.resetSettingGame();
    this.hideRuleSprint();
    this.showFiledGame();
    this.listener();
    this.dispath('start-timer'); // запускаем таймер
  };

  resetSettingGame = () => {
    this.dispath('reset-timer');
    this.dispath('reset-count-game');
    this.countTrueAnsve = 0;
    this.clickButtonFalse = false;
    this.clickButtonTrue = false;
    this.endTimeGame = false;
    this.userResult = 0;
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
  };

  addCountGame = () => {
    this.dispath('add-count-game'); // увеличиваем очки за игру
  };

  addCountReset = () => {
    this.dispath('add-count-game-reset'); // устанавливаем +10 счёта очков
  };

  srcAudioTrue = '../assets/img/true2.mp3';

  srcAudioFalse = '../assets/img/false.mp3';

  playAudioError = () => {
    if (this.stopAudioError) return;
    if (
      (this.translate && this.clickButtonTrue && !this.stopAudioError) ||
      (!this.translate && this.clickButtonFalse && !this.stopAudioError)
    ) {
      new Audio(this.srcAudioTrue).play();
    } else {
      new Audio(this.srcAudioFalse).play();
    }
  };

  disabledBtnAudioError = () => {
    this.dispath('disabled-audio-error');
  };

  btnFalseClick = () => {
    this.clickButtonFalse = true;
    this.clickButtonTrue = false;
    this.playAudioError();
    this.countTrueAnsve = 0;
    this.addCountReset();
  };

  btnTrueClick = () => {
    this.clickButtonFalse = false;
    this.clickButtonTrue = true;
    this.countTrueAnsve += 1;
    this.playAudioError();
    this.addCountGame();
  };

  listener = () => {
    window.addEventListener('keydown', (event) => {
      const { key: keys } = event;
      switch (keys) {
        case 'ArrowLeft':
          this.btnFalseClick();
          break;
        case 'ArrowRight':
          this.btnTrueClick();
          break;
        default:
          break;
      }
    });
  };
}
