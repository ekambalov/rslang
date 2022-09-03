import { Word } from '../../Interfaces/word-model';
import BaseComponent from '../../Abstract/base-component';
import { getWords } from '../../Model/getTextbook';
import Services from '../../Interfaces/services';
import TextBookCart from '../../components/textbook-cart';
import TextBookSettings from '../../components/textbook-settings';
import State from '../../Model/state';

export default class VocabularyPage extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('section', 'vocabulary');
  }

  render = () => {
    this.parent.innerHTML = '';
    this.element.textContent = 'slounik';
    this.parent.appendChild(this.element);
  };
}
