import BaseComponent from '../../Abstract/base-component';
import Services from '../../Interfaces/services';

export default class ButtonSelect extends BaseComponent<HTMLButtonElement> {
  constructor(private readonly parent: HTMLElement, private readonly services: Services, private props: string) {
    super('button', `answers__btn-select`);
  }

  render = () => {
    this.element.addEventListener('click', this.selectAnswer);
    this.services.audioCall.add('show-answer', this.changeState);

    this.element.textContent = this.props;
    this.parent.appendChild(this.element);
  };

  selectAnswer = () => {
    this.services.audioCall.checkAnswer(this.props);
  };

  changeState = (...data: string[]) => {
    const [correctAnswer, wrongAnswer] = data;
    if (this.props === correctAnswer) {
      this.element.classList.add('btn-select--correct');
    } else if (this.props === wrongAnswer) {
      this.element.classList.add('btn-select--wrong');
    }
    this.element.removeEventListener('click', this.selectAnswer);
  };

  destroy = () => {
    this.element.removeEventListener('click', this.selectAnswer);
    this.services.audioCall.remove('show-answer', this.changeState);

    super.destroy();
  };
}
