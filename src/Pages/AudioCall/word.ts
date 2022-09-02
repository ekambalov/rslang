import BaseComponent from '../../Abstract/base-component';
import Services from '../../Interfaces/services';
import ButtonAudio from './btn-audio';

export default class WordContainer extends BaseComponent {
  private baseUrl = 'https://rs-learn-words.herokuapp.com/';

  private wordImg?: BaseComponent;

  private wordText?: BaseComponent;

  private wordTranscription?: BaseComponent;

  private btnAudio?: ButtonAudio;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'word-container');
  }

  render = () => {
    this.services.audioCall.add('next-word', this.updateWordContainer);
    const wordData = this.services.audioCall.getWord();
    if (wordData) {
      this.children = [
        (this.wordImg = new BaseComponent<HTMLImageElement>('img', 'word-img')),
        (this.btnAudio = new ButtonAudio(this.element, this.services)),
        (this.wordText = new BaseComponent('p', 'word-text')),
        (this.wordTranscription = new BaseComponent('p', 'word-transcription')),
      ];

      this.wordImg.element.setAttribute('src', `${this.baseUrl}${wordData.image}`);
      this.element.appendChild(this.wordImg.element);

      this.btnAudio.render();

      this.wordText.element.textContent = wordData.word;

      this.element.appendChild(this.wordText.element);

      this.wordTranscription.element.textContent = wordData.transcription;

      this.element.appendChild(this.wordTranscription.element);

      this.parent.appendChild(this.element);
    }
  };

  updateWordContainer = () => {
    const wordData = this.services.audioCall.getWord();

    if (wordData) {
      this.wordImg?.element.setAttribute('src', `${this.baseUrl}${wordData.image}`);
      if (this.wordText) {
        this.wordText.element.textContent = wordData.word;
      }
      if (this.wordTranscription) {
        this.wordTranscription.element.textContent = wordData.transcription;
      }
    }
  };

  destroy() {
    this.services.audioCall.remove('next-word');
    super.destroy();
  }
}
