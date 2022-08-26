import { Word } from '../Interfaces/word-model';
import Services from '../Service/service';
import BaseComponent from '../Abstract/base-component';
import { baseUrl } from '../model/getTextbook';

export default class TextBookCart extends BaseComponent {
  constructor(
    private readonly parent: HTMLElement,
    private readonly services: Services,
    private readonly wordData: Word
  ) {
    super('div', 'textbook__cart cart');
  }

  render = () => {
    const img = new BaseComponent('img', 'cart__image').element as HTMLImageElement;
    img.src = baseUrl + this.wordData.image;
    img.alt = this.wordData.word;

    const info = new BaseComponent('div', 'cart__info').element;
    const word = new BaseComponent('p', 'cart__word').element as HTMLImageElement;
    word.textContent = `${this.wordData.word} – ${this.wordData.transcription}`;
    const translate = new BaseComponent('p', 'cart__translate').element;
    translate.textContent = this.wordData.wordTranslate;
    const textMeaning = new BaseComponent('p', 'cart__english').element;
    textMeaning.innerHTML = this.wordData.textMeaning;
    const textMeaningTranslate = new BaseComponent('p', 'cart__translate').element;
    textMeaningTranslate.textContent = this.wordData.textExampleTranslate;
    const textExample = new BaseComponent('p', 'cart__english').element;
    textExample.innerHTML = this.wordData.textExample;
    const textExampleTranslate = new BaseComponent('p', 'cart__translate').element;
    textExampleTranslate.textContent = this.wordData.textExampleTranslate;
    info.append(word, translate, textMeaning, textMeaningTranslate, textExample, textExampleTranslate);
    this.element.append(img, info);
    this.parent.appendChild(this.element);
  };
}
