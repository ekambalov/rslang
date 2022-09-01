import Observer from '../Abstract/observer';
import getWords from '../model/data-base';
import getRandomInteger from '../Utils/utils';
import { IDataBaseServices } from '../Interfaces/interfaces';
import { Word } from '../Interfaces/word-model';
// import State from '../model/state';

export default class DataBaseServices extends Observer implements IDataBaseServices {
  firstPage = 0;

  lastPage = 29;

  amountWords = 0;

  words?: Word[];

  gamePath = '';

  isAutorise = false;

  getWordsByLevel = async (level: number) => {
    const random = getRandomInteger(this.firstPage, this.lastPage);
    const words = await getWords(level, random);
    this.words = words;
    this.playSelectionGame();
    // console.log(words);
    // console.log(State.currentArrayWords);
  };

  playSelectionGame() {
    document.location.href = this.gamePath;
  }
}
