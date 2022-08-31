import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';

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
    console.log('play');
    this.element.setAttribute('disabled', '');
  };

  stopAudio = () => {
    console.log('stop');
    this.element.removeAttribute('disabled');
  };

  destroy = () => {
    this.services.audioCall.remove('play-audio');
    this.services.audioCall.remove('stop-audio');
    this.element.removeEventListener('click', this.services.audioCall.playAudio);
    super.destroy();
  };
}
