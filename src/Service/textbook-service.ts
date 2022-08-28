import Observer from '../Abstract/observer';
import State from '../model/state';

export default class TextbookService extends Observer {
  getWords(page = 0, group = 0): void {
    this.dispath('get-words', `${page}`, `${group}`);
  }

  nextPage(): void {
    if (State.textbook.currentPage >= 29) return;
    State.textbook.currentPage += 1;
    this.dispath('get-words');
  }

  prevPage(): void {
    if (State.textbook.currentPage === 0) return;
    State.textbook.currentPage -= 1;
    this.dispath('get-words');
  }

  setLevel(level: number): void {
    State.textbook.currentPage = 0;
    State.textbook.currentLevel = level;
    this.dispath('get-words');
  }
}
