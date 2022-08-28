import { Word } from '../../Interfaces/word-model';
import BaseComponent from '../../Abstract/base-component';
import { getWords } from '../../model/getTextbook';
import Services from '../../Service/service';
import TextBookCart from '../../components/textbook-cart';
import TextBookSettings from '../../components/textbook-settings';
import State from '../../model/state';

export default class TextbookPage extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('section', 'textbook');
  }

  render = () => {
    this.parent.innerHTML = ''; // clear the main section
    this.element.innerHTML = ''; // clear the main section
    const title = new BaseComponent<HTMLHeadElement>('h2', 'textbook__title').element;
    const settings = new BaseComponent('div', 'textbook__settings').element;
    new TextBookSettings(settings, this.services).render();
    title.textContent = 'Учебник';
    const carts = new BaseComponent('div', 'textbook__carts').element;
    this.getWords(carts);
    this.element.append(title, settings, carts);
    this.parent.appendChild(this.element); // add our section to main
    this.services.textbook.add('get-words', () => {
      this.getWords(carts);
    });
  };

  private async getWords(parent: HTMLElement): Promise<void> {
    const page = State.textbook.currentPage;
    const group = State.textbook.currentLevel;
    const res = await getWords(page, group);
    const words = (await res.json()) as Word[];
    const container = parent;
    container.innerHTML = '';
    words.forEach((word) => {
      new TextBookCart(parent, this.services, word).render();
    });
    const pageBox = document.querySelector('.settings__page');
    if (pageBox instanceof HTMLElement) pageBox.textContent = `${State.textbook.currentPage + 1}`;
  }
}
