import Observer from '../Abstract/observer';
import { Word } from '../Interfaces/word-model';
import State from '../Model/state';
import { getRandomInteger, shuffle } from '../utils/utils';

export default class AudioСallService extends Observer {
  private baseUrl = 'https://rs-learn-words.herokuapp.com/';

  amountExtraTranslateOptions = 3;

  amountWords = 0;

  private correctAnswers: Word[] = [];

  private wrongAnswers: Word[] = [];

  private constantWords: Word[] = [];

  private words: Word[] = [];

  private signalCorrect = new Audio('../assets/audio/correct.mp3');

  private signalWrong = new Audio('../assets/audio/error.mp3');

  counter = 0;

  private word?: Word;

  getWord = () => {
    if (this.word) {
      return this.word;
    }
    throw new Error();
  };

  setWords = () => {
    this.words = [...State.words];
    this.constantWords = [...State.words];
    this.amountWords = this.words.length;
    this.word = this.words.pop();
  };

  nextWord = () => {
    this.word = this.words?.pop();
    if (this.word) {
      this.counter += 1;
      const { word, image } = this.word;
      this.dispatch('next-word', image, word);
    } else {
      try {
        throw new Error('word is not found');
      } catch (e) {
        console.log(e);
        this.dispatch('stop-game');
      }
    }
  };

  playAudio = () => {
    if (this.word) {
      const { audio } = this.word;
      const audioWord = new Audio(`${this.baseUrl}${audio}`);
      audioWord.addEventListener('ended', this.stopAudio);
      audioWord.play();
      this.dispatch('play-audio');
    } else {
      throw new Error('word is not found');
    }
  };

  stopAudio = () => {
    this.dispatch('stop-audio');
  };

  // showAnswer = () => {

  // }

  checkAnswer = (answer = '') => {
    if (this.word) {
      const isTrue = this.word.wordTranslate === answer;
      if (this.word.wordTranslate === answer) {
        this.correctAnswers.push(this.word);
        this.dispatch('correct-answer');
      } else {
        this.wrongAnswers.push(this.word);
        this.dispatch('wrong-answer');
      }
      this.playSignal(isTrue);
    }
  };

  playSignal = (answer: boolean) => {
    if (answer) {
      this.signalCorrect.play();
    } else {
      this.signalWrong.play();
    }
  };

  getTranslateOptions = () => {
    if (!this.word) {
      throw new Error();
    }
    const translateOptions: string[] = [this.word.wordTranslate];
    for (let i = 0; i < this.amountExtraTranslateOptions; ) {
      const idx = getRandomInteger(0, this.amountWords);
      if (this.constantWords[idx] !== this.word) {
        translateOptions.push(this.constantWords[idx].wordTranslate);
        i += 1;
      }
    }
    return shuffle<string>(translateOptions);
  };
}
