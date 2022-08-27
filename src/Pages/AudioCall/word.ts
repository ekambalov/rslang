import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';

export default class WordContainer extends BaseComponent {
  private baseUrl = 'https://rs-learn-words.herokuapp.com/';

  private btnPlayAudio?: HTMLElement;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'word-container');

    this.services.audioCall.add('play-audio', this.playAudio);
    this.services.audioCall.add('stop-audio', this.stopAudio);
  }

  render() {
    const word = this.services.audioCall.getWord();
    if (word) {
      const wordImg = new BaseComponent<HTMLImageElement>('img', 'word-img').element;
      wordImg.setAttribute('src', `${this.baseUrl}${word.image}`);
      this.element.appendChild(wordImg);

      const btn = new BaseComponent<HTMLButtonElement>('button', 'btn-play-audio').element;
      btn.addEventListener('click', this.services.audioCall.playAudio);
      this.element.appendChild(btn);
      this.btnPlayAudio = btn;

      const wordText = new BaseComponent('p', 'word-text').element;
      this.element.appendChild(wordText);

      const wordTranscription = new BaseComponent('p', 'word-transcription').element;
      wordTranscription.textContent = word.transcription;
      this.element.appendChild(wordTranscription);

      this.parent.appendChild(this.element);
    }
  }

  playAudio = () => {
    this.btnPlayAudio?.setAttribute('disabled', '');
  };

  stopAudio = () => {
    this.btnPlayAudio?.removeAttribute('disabled');
  };
}
