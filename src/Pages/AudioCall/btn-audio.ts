import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';

export default class ButtonAudio extends BaseComponent<HTMLButtonElement> {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('button', 'audio-call__btn-play-audio');

    this.services.audioCall.add('play-audio', this.playAudio);
    this.services.audioCall.add('stop-audio', this.stopAudio);
  }

  render = () => {
    this.element.addEventListener('click', this.services.audioCall.playAudio);

    this.parent.appendChild(this.element);
  };

  playAudio = () => {
    this.element.setAttribute('disabled', '');
  };

  stopAudio = () => {
    this.element.removeAttribute('disabled');
  };
}
