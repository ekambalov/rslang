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

  setWords() {
    this.words = [...State.words];
    this.constantWords = [...State.words];
    this.amountWords = this.words.length;
    this.word = this.words.pop();
  }

  nextWord() {
    this.word = this.words?.pop();
    if (this.word) {
      this.counter += 1;
      this.dispatch('next-word');
      const { word, image } = this.word;
    } else {
      try {
        throw new Error('word is not found');
      } catch (e) {
        console.log(e);
        this.dispath('stop-game');
      }
    }
  }

  playAudio = () => {
    if (this.word) {
      const { audio } = this.word;
      const audioWord = new Audio(`${this.baseUrl}${audio}`);
      audioWord.addEventListener('ended', this.stopAudio);
      audioWord.play();
      this.dispath('play-audio');
    } else {
      throw new Error('word is not found');
    }
  };

  stopAudio = () => {
    this.dispath('stop-audio');
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
