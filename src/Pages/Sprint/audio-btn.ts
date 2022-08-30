import Services from '../../Service/service';
import BaseComponent from '../../Abstract/base-component';

export default class AudioBtnGameSprint extends BaseComponent<HTMLButtonElement> {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('button', 'game__audio');
    this.services.sprint.add('play-audio-word', this.playAudioWord);
    this.services.sprint.add('stop-audio-word', this.stopAudioWord);
  }

  render = () => {
    this.element.addEventListener('click', this.services.audioCall.playAudio);
    this.parent.appendChild(this.element);
  };

  playAudioWord = () => {
    this.element.setAttribute('disabled', '');
  };

  stopAudioWord = () => {
    this.element.removeAttribute('disabled');
  };
}
