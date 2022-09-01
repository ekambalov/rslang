import Observer from '../Abstract/observer';
import getWords from '../model/data-base';
import getRandomInteger from '../Utils/utils';
import State from '../model/state';
import { Word } from '../Interfaces/word-model';

export default class LevelSelectionService extends Observer {
  firstPage = 0;

  lastPage = 29;

  gamePath = '';

  isAutorise = false;

  getWordsByLevel = async (level: number) => {
    const page = getRandomInteger(this.firstPage, this.lastPage);
    const words = await getWords(level, page);
    this.updateState(level, page, words);
    this.playSelectionGame();
  };

  updateState(level: number, page: number, words: Word[]) {
    State.currentPage = page;
    State.currentLevel = level;
    State.words = words;
    localStorage.setItem('state', JSON.stringify(State));
  }

  playSelectionGame() {
    document.location.href = this.gamePath;
  }
}
