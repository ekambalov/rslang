import Observer from '../Abstract/observer';
import State from '../Model/state';
import { Word } from '../Interfaces/word-model';
import fethWords from '../Model/data-base';
import { getRandomInteger } from '../Helper/utils';

export default class SprintService extends Observer {
  private baseUrl = 'https://rs-learn-words.herokuapp.com/';

  currentArrayWordsGame: Word[] = [];

  constantWords?: Word[];

  currentPage = 0;

  endTimeGame = false; // закончилось время таймера

  countTrueAnsve = 0; // количество правильных ответов подряд

  userResult = 0; // количество набранных очков

  translateShowTrue = true; //  показывается правильный ответ

  clickButtonTrue = false; // нажата ли кнопка верно

  clickButtonFalse = false; // нажата ли кнопка неверно

  stopAudioError = false; // нажата ли кнопка отмены звукового сигнала

  idTimerGame: NodeJS.Timer | undefined; // ID таймера для его остановки;

  trueAnswe: string[] = [];

  arrayShowWords: Word[] = [];

  arrayWordsAnsweTrue: Word[] = [];

  arrayWordsAnsweFalse: Word[] = [];

  currentWords: Word[] = [];

  currentWordID = 0;

  currentWord: Word = {
    audio: 'files/03_2450.mp3',
    audioExample: 'files/03_2450_example.mp3',
    audioMeaning: 'files/03_2450_meaning.mp3',
    group: 4,
    id: '5e9f5ee35eb9e72bc21afe31',
    image: 'files/03_2450.jpg',
    page: 2,
    textExample: 'I quietly passed on a <b>hint</b> to my sister about the test.',
    textExampleTranslate: 'Я спокойно передал намек моей сестре о тесте',
    textMeaning: 'A <i>hint</i> is information that suggests something will happen or is true.',
    textMeaningTranslate: 'Подсказка - это информация, которая предполагает, что что-то случится или будет правдой',
    transcription: '[hint]',
    word: 'hint',
    wordTranslate: 'намек',
  };

  repeatGame = async () => {
    clearInterval(this.idTimerGame as NodeJS.Timer); // перезапуск игры
    await fethWords(State.currentLevel, getRandomInteger(0, 19));
    this.startGameSprint();
  };

  exitGameSprint = () => {
    this.dispatch('enter-game-sprint'); // выход из игры
  };

  hideRuleSprint = () => {
    this.dispatch('hide-rule-sprint'); // прячем правила игры
  };

  showRuleSprint = () => {
    this.dispatch('show-rule-sprint'); // показываем правила игры
  };

  showFiledGame = () => {
    this.dispatch('show-filed-game'); // показываем поле игры
  };

  hideFileGame = () => {
    this.dispatch('hide-filed-game'); // прячем поле игры
  };

  showResult = () => {
    this.dispath('show-results-sprint');
  };

  hideResult = () => {
    this.dispath('hide-results-sprint');
  };

  writeResult = () => {
    this.dispath('write-results-sprint');
  };

  playAudioWord = () => {
    if (this.currentWord) {
      const { audio } = this.currentWord; // произношение слова
      new Audio(`${this.baseUrl}${audio}`).play();
    } else {
      throw new Error('word is not found');
    }
  };

  playWordResulTable = (src: string) => {
    if (src) {
      new Audio(`${this.baseUrl}${src}`).play();
    } else {
      throw new Error('word is not found');
    }
  };

  stopAudioWord = () => {
    this.dispatch('stop-audio-word'); // произношение слова
  };

  writeWordGame = () => {
    this.dispatch('write-word-game'); // пишем слова англ/рус
  };

  startGameSprint = () => {
    this.currentArrayWordsGame = [...State.words];
    this.resetSettingGame();
    this.writeWordGame();
    this.hideRuleSprint(); // прячем правила
    this.hideResult(); // прячем результаты
    this.showFiledGame(); // показываем игровое поле
    this.listener();
    this.dispatch('start-timer'); // запускаем таймер
  };

  resetSettingGame = () => {
    this.dispatch('reset-timer');
    this.dispatch('reset-count-game');
    this.countTrueAnsve = 0;
    this.clickButtonFalse = false;
    this.clickButtonTrue = false;
    this.endTimeGame = false;
    this.userResult = 0;
    this.arrayShowWords = [];
    this.arrayWordsAnsweTrue = [];
    this.arrayWordsAnsweFalse = [];
  };

  resetTimer = () => {
    this.dispatch('reset-timer'); // сбрасываем таймер
  };

  resetCountGame = () => {
    this.dispatch('reset-count-game'); // сбрасываем счёт игры
  };

  finishGame = () => {
    this.endTimeGame = true;
    this.hideFileGame();
    this.upgradeResult();
    this.showResult();
    this.writeResult();
  };

  timer = (element: HTMLElement) => {
    let seconds = 60;
    const timerGame = setInterval(
      (el: HTMLElement) => {
        // eslint-disable-next-line no-param-reassign
        el.innerHTML = `${seconds}`;
        seconds -= 1;
        if (seconds < 0) {
          this.finishGame();
          clearInterval(timerGame);
        }
      },
      1000,
      element
    );
    this.idTimerGame = timerGame;
  };

  addCountGame = () => {
    this.dispatch('add-count-game'); // увеличиваем очки за игру
  };

  correctAddCount = () => {
    this.dispatch('correct-add-count'); // увеличиваем очки за игру
  };

  addCountReset = () => {
    this.dispatch('add-count-game-reset'); // устанавливаем +10 счёта очков
  };

  srcAudioTrue = '../assets/img/true2.mp3';

  srcAudioFalse = '../assets/img/false.mp3';

  playAudioError = () => {
    if (this.stopAudioError) return;
    if (
      (this.translateShowTrue && this.clickButtonTrue && !this.stopAudioError) ||
      (!this.translateShowTrue && this.clickButtonFalse && !this.stopAudioError)
    ) {
      new Audio(this.srcAudioTrue).play();
    } else {
      new Audio(this.srcAudioFalse).play();
    }
  };

  disabledBtnAudioError = () => {
    this.dispatch('disabled-audio-error');
  };

  btnTrueAddActiveStyle = () => {
    this.dispath('btn-true-active-style');
  };

  btnFalseAddActiveStyle = () => {
    this.dispath('btn-false-active-style');
  };

  btnFalseClick = () => {
    this.clickButtonFalse = true;
    this.clickButtonTrue = false;
    this.btnTrueAddActiveStyle();
    this.playAudioError();
    if (!this.translateShowTrue) {
      this.countTrueAnsve += 1;
      this.addCountGame();
      this.correctAddCount();
      this.arrayWordsAnsweTrue.push(this.currentWord);
      this.arrayShowWords.push(this.currentWord);
    } else {
      this.countTrueAnsve = 0;
      this.addCountReset();
      this.arrayWordsAnsweFalse.push(this.currentWord);
      this.arrayShowWords.push(this.currentWord);
    }
    this.writeWordGame();
  };

  btnTrueClick = () => {
    this.clickButtonFalse = false;
    this.clickButtonTrue = true;
    this.btnTrueAddActiveStyle();
    this.playAudioError();
    if (this.translateShowTrue) {
      this.countTrueAnsve += 1;
      this.addCountGame();
      this.correctAddCount();
      this.arrayWordsAnsweTrue.push(this.currentWord);
      this.arrayShowWords.push(this.currentWord);
      console.log('array true', this.arrayWordsAnsweTrue.length);
    } else {
      this.arrayWordsAnsweFalse.push(this.currentWord);
      this.countTrueAnsve = 0;
      this.addCountReset();
      this.arrayShowWords.push(this.currentWord);
      console.log('array false', this.arrayWordsAnsweFalse);
    }
    this.writeWordGame();
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

  getUnikNumber = (number: number, from: number, to: number): number => {
    let unikNumber = getRandomInteger(from, to);
    if (unikNumber === number) {
      do {
        unikNumber = getRandomInteger(from, to);
      } while (unikNumber === number);
    }
    return unikNumber;
  };

  // eslint-disable-next-line consistent-return
  getNewWord = () => {
    if (this.currentArrayWordsGame.length) {
      console.log(this.currentArrayWordsGame.length);
      const wordID = this.currentArrayWordsGame.length - 1;
      const wordFull = this.currentArrayWordsGame.pop();
      this.currentWord = wordFull as Word; // получили англ слово и сохранили
      const englWord = (wordFull as Word).word;

      const random = getRandomInteger(0, 10); // 50% верных и неверных переводов
      if (random <= 5) {
        this.translateShowTrue = true; // будем показывать правильный перевод
        const trueTranslate = (wordFull as Word).wordTranslate;
        return [englWord, trueTranslate, 'true'];
      }
      if (random > 5) {
        this.translateShowTrue = false; // будем показывать неправильный перевод
        const id: number = this.getUnikNumber(wordID, 0, 19); // рандомный id для превода
        const falseTranslate = State.words[id].wordTranslate;
        return [englWord, falseTranslate, 'false'];
      }
    } else {
      this.getNewPagesWord();
    }
  };

  getNewPagesWord = async () => {
    const page = this.getUnikNumber(this.currentPage, 0, 29);
    this.currentPage = page;
    const words = await fethWords(State.currentLevel, page);
    this.constantWords = [...words];
    this.currentArrayWordsGame = [...words];
  };

  upgradeResult = () => {
    this.dispath('upgrade-results-sprint');
  };
}
