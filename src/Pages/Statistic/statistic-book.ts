import Services from '../../Interfaces/services';
import BaseComponent from '../../Abstract/base-component';

export default class StatisticBook extends BaseComponent {
  private bookTitle?: BaseComponent;

  private containerTitle?: BaseComponent;

  private containerItem?: BaseComponent;

  private bookImage?: BaseComponent;

  private newWords?: BaseComponent;

  private countTrueFalse?: BaseComponent;

  private chain?: BaseComponent;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'statistic-book');
  }

  render = () => {
    this.children = [
      (this.containerTitle = new BaseComponent('div', 'book__result-title')),
      (this.containerItem = new BaseComponent('div', 'book__result-item')),
      (this.bookTitle = new BaseComponent('h6', 'book__title')),
      (this.bookImage = new BaseComponent('img', 'book__img')),
      (this.newWords = new BaseComponent('h6', 'book__new-words')),
      (this.countTrueFalse = new BaseComponent('h6', 'book__true-false')),
      (this.chain = new BaseComponent('h6', 'book__chain')),
    ];
    this.containerTitle.element.append(this.bookTitle.element, this.bookImage.element);
    this.containerItem.element.append(this.newWords.element, this.countTrueFalse.element, this.chain.element);

    this.bookTitle.element.innerHTML = 'Учебник';
    this.bookImage.element.setAttribute('src', './assets/img/book.png');
    this.bookImage.element.setAttribute('alt', 'img book logo');

    this.element.prepend(this.containerTitle.element, this.containerItem.element);
    this.parent.appendChild(this.element);
  };
}
