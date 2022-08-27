import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';

export default class WordContainer extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'word-container');
  }

  render() {
    const wordData = this.services.audioCall.getCurrentWord();
    const wordImg = new BaseComponent('img', 'word-img').element;

    this.element.appendChild(wordImg);

    const btnWordAudio = new BaseComponent<HTMLButtonElement>('button', 'btn-word-audio').element;

    this.element.appendChild(btnWordAudio);

    const wordText = new BaseComponent('p', 'word-text').element;

    this.element.appendChild(wordText);

    this.parent.appendChild(this.element);
  }
}
