import { createEasyUserWord, createDifficultUserWord, deleteUserWord } from '../model/getTextbook';
import Observer from '../Abstract/observer';

export default class TextbookService extends Observer {
  getWords(page = 0, group = 0): void {
    this.dispath('get-words', `${page}`, `${group}`);
  }

  addWordToDif(): void {
    let id: string | undefined = '';
    if (this instanceof HTMLElement) {
      id = this.parentElement?.parentElement?.id;
    }
    if (id) createDifficultUserWord(id);
  }

  addWordToEasy(): void {
    let id: string | undefined = '';
    if (this instanceof HTMLElement) {
      id = this.parentElement?.parentElement?.id;
    }
    if (id) createEasyUserWord(id);
  }

  deleteWord(): void {
    let id: string | undefined = '';
    if (this instanceof HTMLElement) {
      id = this.parentElement?.parentElement?.id;
    }
    if (id) deleteUserWord(id);
  }
}
