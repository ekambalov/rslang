import BaseComponent from '../../Abstract/base-component';
import Services from '../../Interfaces/services';
import AudioCallHeader from './header';
import WordContainer from './word';

export default class AudioCall extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'audio-call');
  }

  render = () => {
    if (this.children.length) {
      this.destroy();
    }
    this.services.audioCall.setWords();
    this.parent.innerHTML = '';
    this.children = [new AudioCallHeader(this.element, this.services), new WordContainer(this.element, this.services)];
    this.children.forEach((element) => {
      element.render();
    });
    this.parent.appendChild(this.element);
  };
}
