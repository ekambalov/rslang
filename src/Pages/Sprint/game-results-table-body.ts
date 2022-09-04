import Services from '../../Interfaces/services';
import BaseComponent from '../../Abstract/base-component';
import { Word } from '../../Interfaces/word-model';

export default class TableBodyResultsGame extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services, private word: Word) {
    super('tr', 'result-table__row');
  }

  render = () => {
    this.element.innerHTML = `<tr><td>${this.word.word}</td><td>${this.word.transcription}</td><td>${this.word.wordTranslate}</td><td>v</td> </tr>`;
    this.parent.appendChild(this.element);
  };
}
