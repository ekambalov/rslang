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
      (this.newWords = new BaseComponent('h6', 'audio__new-words')),
      (this.countTrueFalse = new BaseComponent('h6', 'audio__true-false')),
      (this.chain = new BaseComponent('h6', 'audio__chain')),
    ];
    this.containerTitle.element.append(this.audioTitle.element, this.audioImage.element);
    this.containerItem.element.append(this.newWords.element, this.countTrueFalse.element, this.chain.element);

    this.audioTitle.element.innerHTML = 'Аудио-вызов';
    this.audioImage.element.setAttribute('src', './assets/img/audio.png');
    this.audioImage.element.setAttribute('alt', 'img audio logo');

    this.element.prepend(this.containerTitle.element, this.containerItem.element);
    this.parent.appendChild(this.element);
  };
}
