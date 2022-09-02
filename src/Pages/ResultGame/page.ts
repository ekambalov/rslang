import BaseComponent from '../../Abstract/base-component';
import Services from '../../Interfaces/services';
import ListStatistics from './list';

export default class ResultsGame extends BaseComponent {
  private titleWrongAnswers?: BaseComponent;

  private listWrongAnswers?: BaseComponent;

  private titleCorrectAnswers?: BaseComponent;

  private listCorrectAnswers?: BaseComponent;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'audio-call-statistic');
  }

  render = () => {
    this.children = [
      (this.titleWrongAnswers = new BaseComponent(
        'h2',
        'audio-call-statistic__title audio-call-statistic__title--wrong'
      )),
      (this.titleCorrectAnswers = new BaseComponent(
        'h2',
        'audio-call-statistic__title audio-call-statistic__title--correct'
      )),
      (this.listWrongAnswers = new ListStatistics(this.element, this.services, { className: 'list-wrong-answers' })),
      (this.listCorrectAnswers = new ListStatistics(this.element, this.services, {
        className: 'list-correct-answers',
      })),
    ];

    this.titleWrongAnswers.render();

    this.listWrongAnswers.render();

    this.titleCorrectAnswers.render();

    this.listCorrectAnswers.render();

    this.parent.appendChild(this.element);
  };
}
