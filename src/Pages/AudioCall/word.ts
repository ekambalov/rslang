import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';
import ButtonAudio from './btn-audio';

export default class WordContainer extends BaseComponent {
  private baseUrl = 'https://rs-learn-words.herokuapp.com/';

  private wordImg?: HTMLElement;

  private wordText?: HTMLElement;

  private wordTranscription?: HTMLElement;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'word-container');

    this.services.audioCall.add('next-word', this.updateWordContainer);
  }

  render() {
    const wordData = this.services.audioCall.getWord();
    if (wordData) {
      const img = new BaseComponent<HTMLImageElement>('img', 'word-img').element;
      img.setAttribute('src', `${this.baseUrl}${wordData.image}`);
      this.element.appendChild(img);
      this.wordImg = img;

      new ButtonAudio(this.element, this.services).render();

      this.wordText = new BaseComponent('p', 'word-text').element;
      this.wordText.textContent = wordData.word;
      this.element.appendChild(this.wordText);

      this.wordTranscription = new BaseComponent('p', 'word-transcription').element;
      this.wordTranscription.textContent = wordData.transcription;
      this.element.appendChild(this.wordTranscription);

      this.parent.appendChild(this.element);
    }
  }

  updateWordContainer() {
    const wordData = this.services.audioCall.getWord();
    if (wordData) {
      this.wordImg?.setAttribute('src', `${this.baseUrl}${wordData.image}`);
      if (this.wordText) {
        this.wordText.textContent = wordData.word;
      }
      if (this.wordTranscription) {
        this.wordTranscription.textContent = wordData.transcription;
      }
    }
  }
}
