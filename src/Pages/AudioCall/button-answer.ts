import BaseComponent from '../../Abstract/base-component';
import Services from '../../Interfaces/services';

export default class ButtonSelect extends BaseComponent<HTMLButtonElement> {
  constructor(private readonly parent: HTMLElement, private readonly services: Services, private props: string) {
    super('button', `answers__btn-select`);
  }

  render = () => {
    this.element.addEventListener('click', this.selectAnswer);

    this.element.textContent = this.props;
    this.element.setAttribute('data-answer', this.props);
    this.parent.appendChild(this.element);
  };

  selectAnswer = () => {
    const answer = this.element.getAttribute('data-answer');
    if (answer) {
      this.services.audioCall.checkAnswer(answer);
    }
  };

  destroy() {
    this.element.removeEventListener('click', this.selectAnswer);
    super.destroy();
  }
}
