import Services from '../../Interfaces/services';
import BaseComponent from '../../Abstract/base-component';

export default class StatisticSprint extends BaseComponent {
  private sprintTitle?: BaseComponent;

  private containerTitle?: BaseComponent;

  private containerItem?: BaseComponent;

  private sprintImage?: BaseComponent;

  private newWords?: BaseComponent;

  private countTrueFalse?: BaseComponent;

  private chain?: BaseComponent;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'statistic-sprint');
  }

  render = () => {
    this.children = [
      (this.containerTitle = new BaseComponent('div', 'sprint__result-title')),
      (this.containerItem = new BaseComponent('div', 'sprint__result-item')),
      (this.sprintTitle = new BaseComponent('h6', 'sprint__title')),
      (this.sprintImage = new BaseComponent('img', 'sprint__img')),
      (this.newWords = new BaseComponent('h6', 'sprint__new-words item-statistic')),
      (this.countTrueFalse = new BaseComponent('h6', 'sprint__true-false item-statistic')),
      (this.chain = new BaseComponent('h6', 'sprint__chain item-statistic')),
    ];
    this.containerTitle.element.append(this.sprintTitle.element, this.sprintImage.element);
    this.containerItem.element.append(this.newWords.element, this.countTrueFalse.element, this.chain.element);

    this.sprintTitle.element.innerHTML = 'Спринт';
    this.sprintImage.element.setAttribute('src', './assets/img/sprint2.png');
    this.sprintImage.element.setAttribute('alt', 'img sprint logo');

    this.newWords.element.innerHTML = 'Новые слова: 0';
    this.countTrueFalse.element.innerHTML = 'Верных ответов: 0%';
    this.chain.element.innerHTML = 'Самая длинная цепочка: 1';
    this.element.prepend(this.containerTitle.element, this.containerItem.element);
    this.parent.appendChild(this.element);

    this.services.statistic.add('write-statistic-sprint', this.writeStatistic);
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
