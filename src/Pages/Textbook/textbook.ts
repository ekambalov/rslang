import { Word } from '../../Interfaces/word-model';
import BaseComponent from '../../Abstract/base-component';
import { getWords } from '../../model/getTextbook';
import Services from '../../Service/service';

export default class TextbookPage extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('section', 'texbook');
  }

  render = () => {
    this.parent.innerHTML = ''; // clear the main section

    this.element.textContent = 'textbook'; // creating our section

    // this.services.textbook.add('get-words', this.getWords);
    this.getWords().then((words) => {
      console.log(words);
    });
    this.parent.appendChild(this.element); // add our section to main
  };

  getWords(page = 0, group = 0) {
    return getWords(page, group)
      .then((res) => {
        let result: Promise<Word[]> | undefined;
        if (res.ok) {
          result = res.json();
        } else {
          throw new Error("Couldn't download");
        }
        return result;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
