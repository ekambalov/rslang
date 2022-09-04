import Observer from '../Abstract/observer';
import { Word } from '../Interfaces/word-model';
import State from '../Model/state';
import { getRandomInteger, shuffle } from '../Helper/utils';

export default class AudioСallService extends Observer {
  private baseUrl = 'https://rs-learn-words.herokuapp.com/';

  private readonly amountTranslateOptions = 3;

  private selectedAnswer = '';

  amountWords = 0;

  private correctAnswers: Word[] = [];

  private wrongAnswers: Word[] = [];

  private constantWords: Word[] = [];

  private words: Word[] = [];

  private readonly signalCorrect = new Audio('../assets/audio/correct.mp3');

  private readonly signalWrong = new Audio('../assets/audio/error.mp3');

  counter = 1;

  private word?: Word;

  getWord() {
    if (this.word) {
      return this.word;
    }
    throw new Error();
  }

  getWrongAnswers = () => {
    if (this.wrongAnswers) {
      return this.wrongAnswers;
    }
    throw new Error();
  };

  getCorrectAnswers = () => {
    if (this.correctAnswers) {
      return this.correctAnswers;
    }
    throw new Error();
  };

  setWords() {
    this.words = [...State.words];
    this.constantWords = [...State.words];
    this.amountWords = this.words.length;
    this.word = this.words.pop();
  }

  setNameGame = () => {
    State.nameGame = 'audio-call';
  };

  resetGameData = () => {
    this.counter = 1;
    this.wrongAnswers = [];
    this.correctAnswers = [];
  };

  nextWord() {
    this.word = this.words?.pop();
    if (this.word) {
      this.counter += 1;
<<<<<<< HEAD
      this.dispath('next-word');
      this.playAudio(this.word.audio);
    } else {
      this.dispath('stop-game');
=======
      this.dispatch('next-word');
      this.playAudio(this.word.audio);
    } else {
      this.dispatch('stop-game');
>>>>>>> 079411bd768a3acb29fe293621e80e95e681123c
    }
  }

  switchScreenMode = () => {
    if (!document.fullscreenElement) {
<<<<<<< HEAD
      this.dispath('full-screen');
    } else {
      this.dispath('default-screen');
=======
      this.dispatch('full-screen');
    } else {
      this.dispatch('default-screen');
>>>>>>> 079411bd768a3acb29fe293621e80e95e681123c
    }
  };

  playAudio = (path = this.word?.audio) => {
    const audioWord = new Audio(`${this.baseUrl}${path}`);
    audioWord.addEventListener('ended', this.stopAudio);
    audioWord.play();
<<<<<<< HEAD
    this.dispath('play-audio');
=======
    this.dispatch('play-audio');
>>>>>>> 079411bd768a3acb29fe293621e80e95e681123c
  };

  stopAudio = () => {
    this.dispatch('stop-audio');
  };

  showWordCard() {
    if (this.word) {
      this.dispatch('show-answer', this.word.wordTranslate, this.selectedAnswer);
    }
  }

  onClickShowOrNext = (state: string) => {
    if (state === 'dont-know') {
      this.checkAnswer();
    } else {
      this.nextWord();
    }
  };

  checkAnswer(answer = '') {
    if (this.word) {
      const isCorrect = this.word.wordTranslate === answer;
      this.selectedAnswer = answer;
      if (this.word.wordTranslate === answer) {
        this.correctAnswers.push(this.word);
      } else {
        this.wrongAnswers.push(this.word);
      }
      if (answer) {
        this.playSignal(isCorrect);
      }
      this.showWordCard();
    }
  }

  playSignal(answer: boolean) {
    if (answer) {
      this.signalCorrect.play();
    } else {
      this.signalWrong.play();
    }
  }

  getTranslateOptions() {
    if (!this.word) {
      throw new Error();
    }
    const translateOptions: Set<string> = new Set([this.word.wordTranslate]);
    for (let i = 0; i < this.amountTranslateOptions; ) {
      const idx = getRandomInteger(0, this.amountWords);
      if (!translateOptions.has(this.constantWords[idx].wordTranslate)) {
        translateOptions.add(this.constantWords[idx].wordTranslate);
        i += 1;
      }
    }
    return shuffle<string>(Array.from(translateOptions.values()));
  }
}
