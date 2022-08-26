import { Word } from '../../Interfaces/word-model';
import BaseComponent from '../../Abstract/base-component';
import { getWords } from '../../model/getTextbook';
import Services from '../../Service/service';
import TextBookCart from '../../components/textbook-cart';

export default class TextbookPage extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('section', 'textbook');
  }

  render = () => {
    this.parent.innerHTML = ''; // clear the main section
    this.element.innerHTML = ''; // clear the main section
    const title = new BaseComponent<HTMLHeadElement>('h2', 'textbook__title').element;
    const settings = new BaseComponent('div', 'textbook__settings').element;
    settings.textContent = 'Settings';
    title.textContent = 'Учебник';
    const carts = new BaseComponent('div', 'textbook__carts').element;

    // this.services.textbook.add('get-words', this.getWords);
    this.getWords().then((words) => {
      words.forEach((word) => {
        new TextBookCart(carts, this.services, word).render();
      });
    });
    this.element.append(title, settings, carts);
    this.parent.appendChild(this.element); // add our section to main
  };

  getWords(page = 0, group = 0): Promise<Word[]> {
    return getWords(page, group).then((res) => {
      const result: Promise<Word[]> = res.json();
      return result;
    });
  }
}
