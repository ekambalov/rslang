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
      (this.newWords = new BaseComponent('h6', 'book__new-words item-statistic')),
      (this.countTrueFalse = new BaseComponent('h6', 'book__true-false item-statistic')),
      (this.chain = new BaseComponent('h6', 'book__chain item-statistic')),
    ];
    this.containerTitle.element.append(this.bookTitle.element, this.bookImage.element);
    this.containerItem.element.append(this.newWords.element, this.countTrueFalse.element, this.chain.element);

    this.bookTitle.element.innerHTML = 'Учебник';
    this.newWords.element.innerHTML = 'Новые слова: 0';
    this.countTrueFalse.element.innerHTML = 'Изученные слова за день: 0';
    this.chain.element.innerHTML = 'Процент правильных ответов: 0%';

    this.bookImage.element.setAttribute('src', './assets/img/book.png');
    this.bookImage.element.setAttribute('alt', 'img book logo');

    this.element.prepend(this.containerTitle.element, this.containerItem.element);
    this.parent.appendChild(this.element);
  };

  writeStatistic = () => {
    const newWord = this.services.statistic.userStatisticForServer.optional.sprint.newWords;
    const procent =
      this.services.statistic.userStatisticForServer.optional.sprint.trueAnsve /
      (this.services.statistic.userStatisticForServer.optional.sprint.trueAnsve +
        this.services.statistic.userStatisticForServer.optional.sprint.falseAnsve);
    const procents = Math.trunc(procent * 100);
    // eslint-disable-next-line prefer-destructuring
    const chain = this.services.statistic.userStatisticForServer.optional.sprint.chain;

    this.element.children[1].children[0].innerHTML = `Новые слова:  ${newWord}`;
    this.element.children[1].children[1].innerHTML = `Верных ответов:  ${procents} %`;
    this.element.children[1].children[2].innerHTML = `Самая длинная цепочка:  ${chain}`;
  };

  destroy = () => {
    this.services.statistic.remove('write-statistic-sprint', this.writeStatistic);
    super.destroy();
  };
}
