import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';
import AudioCallHeader from './header';
import WordContainer from './word';

export default class AudioCall {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {}

  render() {
    const words = this.services.dataBase.words ?? [];
    if (words.length) {
      this.services.audioCall.setWords(words);
    }
    this.parent.innerHTML = '';
    const container = new BaseComponent('div', 'audio-call').element;

    new AudioCallHeader(container, this.services).render();

    new WordContainer(container, this.services).render();

    this.parent.appendChild(container);
  }
}
