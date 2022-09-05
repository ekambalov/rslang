import Services from '../../Interfaces/services';
import BaseComponent from '../../Abstract/base-component';

export default class StatisticAudioCall extends BaseComponent {
  private audioTitle?: BaseComponent;

  private containerTitle?: BaseComponent;

  private containerItem?: BaseComponent;

  private audioImage?: BaseComponent;

  private newWords?: BaseComponent;

  private countTrueFalse?: BaseComponent;

  private chain?: BaseComponent;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'statistic-audio-call');
  }

  render = () => {
    this.children = [
      (this.containerTitle = new BaseComponent('div', 'audio__result-title')),
      (this.containerItem = new BaseComponent('div', 'audio__result-item')),
      (this.audioTitle = new BaseComponent('h6', 'audio__title')),
      (this.audioImage = new BaseComponent('img', 'audio__img')),
      (this.newWords = new BaseComponent('h6', 'audio__new-words item-statistic')),
      (this.countTrueFalse = new BaseComponent('h6', 'audio__true-false item-statistic')),
      (this.chain = new BaseComponent('h6', 'audio__chain item-statistic')),
    ];
    this.containerTitle.element.append(this.audioTitle.element, this.audioImage.element);
    this.containerItem.element.append(this.newWords.element, this.countTrueFalse.element, this.chain.element);

    this.audioTitle.element.innerHTML = 'Аудио-вызов';
    this.newWords.element.innerHTML = 'Новые слова: 0';
    this.countTrueFalse.element.innerHTML = 'Верных ответов: 0%';
    this.chain.element.innerHTML = 'Самая длинная цепочка: 1';
    this.audioImage.element.setAttribute('src', './assets/img/audio.png');
    this.audioImage.element.setAttribute('alt', 'img audio logo');

    this.element.prepend(this.containerTitle.element, this.containerItem.element);
    this.parent.appendChild(this.element);
  };

  writeStatistic = () => {
    const newWord = 16;
    const procent = 15;
    const procents = Math.trunc(procent * 100);
    const chain = 9;

    this.element.children[1].children[0].innerHTML = `Новые слова:  ${newWord}`;
    this.element.children[1].children[1].innerHTML = `Верных ответов:  ${procents} %`;
    this.element.children[1].children[2].innerHTML = `Самая длинная цепочка:  ${chain}`;
  };

  destroy = () => {
    this.services.statistic.remove('write-statistic-sprint', this.writeStatistic);
    super.destroy();
  };
}
