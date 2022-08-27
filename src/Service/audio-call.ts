import Observer from '../Abstract/observer';
import { Word } from '../Interfaces/word-model';

export default class AudioСallService extends Observer {
  private baseUrl = 'https://rs-learn-words.herokuapp.com/';

  amountWords = 0;

  counter = 0;

  private word?: Word;

  words?: Word[];

  getWord = () => {
    this.word = this.words?.pop();
    return this.word;
  };

  setWords = (data: Word[]) => {
    this.words = data;
    this.amountWords = data.length;
  };

  nextWord = () => {
    this.word = this.words?.pop();
    if (this.word) {
      this.counter += 1;
      const { word, image } = this.word;
      this.dispath('next-word', image, word);
    } else {
      try {
        throw new Error('word is not found');
      } catch (e) {
        console.log(e);
        this.dispath('stop-game');
      }
    }
  };

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
}
