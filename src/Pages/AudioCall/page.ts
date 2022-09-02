import BaseComponent from '../../Abstract/base-component';
import Services from '../../Interfaces/services';
import Answers from './answers';
import ButtonNext from './btn-next';
import AudioCallHeader from './header';
import Statistics from '../ResultGame/page';
import WordContainer from './word';

export default class AudioCall extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'audio-call');
  }

  render = () => {
    this.services.audioCall.add('stop-game', this.hideGame);
    this.services.audioCall.add('stop-game', this.showStatistics);

    if (this.children.length) {
      this.destroy();
    }
    this.services.audioCall.setWords();
    this.parent.innerHTML = '';
    this.children = [
      new AudioCallHeader(this.element, this.services),
      new WordContainer(this.element, this.services),
      new Answers(this.element, this.services),
      new ButtonNext(this.element, this.services),
    ];
    this.children.forEach((element) => {
      element.render();
    });
    this.parent.appendChild(this.element);
  };

  showStatistics = () => {
    this.children.push(new Statistics(this.element, this.services));
  };

  hideGame = () => {
    this.children.forEach((child) => child.destroy());
  };
}
