import BaseComponent from '../../Abstract/base-component';
import Services from '../../Interfaces/services';

export default class ButtonAudio extends BaseComponent<HTMLButtonElement> {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('button', 'audio-call__btn-play-audio');
  }

  render = () => {
    this.services.audioCall.add('play-audio', this.playAudio);
    this.services.audioCall.add('stop-audio', this.stopAudio);
    this.element.addEventListener('click', this.services.audioCall.playAudio);

    this.parent.appendChild(this.element);
  };

  playAudio = () => {
    this.element.setAttribute('disabled', '');
  };

  stopAudio = () => {
    this.element.removeAttribute('disabled');
  };

  destroy = () => {
    this.services.audioCall.remove('play-audio', this.playAudio);
    this.services.audioCall.remove('stop-audio', this.stopAudio);
    this.element.removeEventListener('click', this.services.audioCall.playAudio);

    super.destroy();
  };
}
