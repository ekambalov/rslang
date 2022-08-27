import Observer from '../Abstract/observer';
import getWords from '../Model/data-base';
import getRandomInteger from '../Utils/utils';
import { IDataBaseServices } from '../Interfaces/interfaces';
import { Word } from '../Interfaces/word-model';

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
  };

  playSelectionGame() {
    document.location.href = this.gamePath;
  }
}
