import BaseComponent from '../../Abstract/base-component';
import { getUsersWords } from '../../Model/getTextbook';
import Services from '../../Interfaces/services';
import TextBookCart from '../../Components/textbook-cart';

export default class VocabularyPage extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('section', 'vocabulary');
  }

  render = () => {
    this.parent.innerHTML = '';
    this.element.textContent = 'slounik';
    this.drawWords(this.element);
    this.parent.appendChild(this.element);
  };

  async drawWords(parent: HTMLElement): Promise<void> {
    const words = await getUsersWords();
    words.forEach((userWord) => {
      if (userWord.optional?.word && parent instanceof HTMLElement && userWord.difficulty === 'hard') {
        const word = userWord.optional?.word;
        new TextBookCart(parent, this.services, word).render();
      }
    });
  }
}
