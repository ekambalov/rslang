import { Word } from '../Interfaces/word-model';
import Services from '../Interfaces/services';
import BaseComponent from '../Abstract/base-component';
import { baseUrl } from '../Model/getTextbook';
import ButtonAudioTextbook from './button-audio-textbook';

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
    const word = new BaseComponent('p', 'cart__word').element;
    word.textContent = `${this.wordData.word} – ${this.wordData.transcription}`;

    new ButtonAudioTextbook(word, this.services, [
      this.wordData.audio,
      this.wordData.audioExample,
      this.wordData.audioMeaning,
    ]).render();

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
    this.element.id = this.wordData.id;
    if (localStorage.getItem('userInfoTokken')) {
      const btnsWrapper = new BaseComponent('div', 'cart__btns').element;

      const addToDif = new BaseComponent('button', 'cart__dif button').element;
      const addToEasy = new BaseComponent('button', 'cart__easy button').element;
      const deleteWord = new BaseComponent('button', 'cart__del button').element;
      addToDif.title = 'Пометить как сложное';
      addToEasy.title = 'Добавить в изучаемое';
      deleteWord.title = 'Удалить слово';
      addToDif.addEventListener('click', this.services.textbook.addWordToDif);
      addToEasy.addEventListener('click', this.services.textbook.addWordToEasy);
      deleteWord.addEventListener('click', this.services.textbook.deleteWord);
      btnsWrapper.append(addToDif, addToEasy, deleteWord);

      this.element.append(btnsWrapper);
    }

    this.parent.appendChild(this.element);
  };
}
