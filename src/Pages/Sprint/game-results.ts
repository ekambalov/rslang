import Services from '../../Service/service';
import BaseComponent from '../../Abstract/base-component';
import TableBodyResultsGame from './game-results-table-body';
// import State from '../../model/state';

export default class ResultsGameSprint extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'game__results results');
    this.services.sprint.add('hide-results-sprint', this.hideResult);
    this.services.sprint.add('show-results-sprint', this.showResult);
  }

  render = () => {
    const title = new BaseComponent('h6', 'results__title').element;
    title.innerHTML = 'Pезультаты';
    const res = new BaseComponent('h6', 'results__count').element;
    res.innerHTML = 'Верно: 36 слов';
    this.element.prepend(title, res);
    new TableBodyResultsGame(this.parent, this.services, this.services.sprint.currentWord).render();
    this.parent.appendChild(this.element);
  };

  hideResult = () => {
    this.element.style.display = 'none';
  };

  showResult = () => {
    this.element.style.display = 'block';
  };
}
