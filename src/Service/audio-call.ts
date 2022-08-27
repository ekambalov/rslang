import Observer from '../Abstract/observer';
import { IWord } from '../Interfaces/interfaces';
import { getWordsData } from '../Models/data-base';

export default class AudioСallService extends Observer {
  private amountWords = 0;

  counter = 0;

  private currentWord?: IWord;

  wordsData?: IWord[];

  getWord = () => {};

  nextWord = () => {
    this.currentWord = this.wordsData?.pop();
    if (this.currentWord) {
      this.counter += 1;
      const { word, image } = this.currentWord;
      this.dispath('next-word', image, word);
    } else {
      try {
        throw new Error('currentWord is not found');
      } catch (e) {
        console.log(e);
        this.dispath('stop-game');
      }
    }
  };

  playAudio = () => {
    if (this.currentWord) {
      const { audio } = this.currentWord;
      const audioWord = new Audio(audio);
      audioWord.addEventListener('ended', this.stopAudio);
      audioWord.play();
      this.dispath('audio-started');
    } else {
      throw new Error('currentWord is not found');
    }
  };

  stopAudio = () => {
    this.dispath('audio-stopped');
  };
}
