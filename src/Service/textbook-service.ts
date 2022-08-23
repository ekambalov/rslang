import Observer from '../Abstract/observer';

export default class TextbookService extends Observer {
  getWords(page = 0, group = 0): void {
    this.dispath('get-words', `${page}`, `${group}`);
  }
}
