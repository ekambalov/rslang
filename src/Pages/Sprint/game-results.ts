import Services from '../../Service/service';
import BaseComponent from '../../Abstract/base-component';
import TableBodyResultsGame from './game-results-table-body';
// import State from '../../model/state';

export default class ResultsGameSprint extends BaseComponent<HTMLDivElement> {
  private title?: BaseComponent;

  private countWordTrue?: BaseComponent;

  private wordTrueTable?: TableBodyResultsGame;

  private countWordFalse?: BaseComponent;

  private wordFalseTable?: TableBodyResultsGame;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'game__results results');
  }

  render = () => {
    this.children = [
      (this.title = new BaseComponent('h6', 'results__title')),
      (this.countWordTrue = new BaseComponent('h6', 'results__count')),
      (this.wordTrueTable = new TableBodyResultsGame(this.element, this.services, this.services.sprint.currentWord)),
      (this.countWordFalse = new BaseComponent('h6', 'results__count')),
      (this.wordFalseTable = new TableBodyResultsGame(this.element, this.services, this.services.sprint.currentWord)),
    ];

    this.title.element.innerHTML = 'Pезультаты игры';
    this.countWordTrue.element.innerHTML = `Верно: ${this.services.sprint.arrayWordsAnsweTrue.length} слов`;
    this.element.prepend(this.title.element, this.countWordTrue.element);

    this.wordTrueTable.render();

    this.countWordFalse.element.innerHTML = `Неверно: ${this.services.sprint.arrayWordsAnsweFalse.length} слов`;
    this.element.append(this.countWordFalse.element);
    this.wordFalseTable.render();

    this.parent.appendChild(this.element);
    this.services.sprint.add('hide-results-sprint', this.hideResult);
    this.services.sprint.add('show-results-sprint', this.showResult);
  };

  destroy = () => {
    this.services.audioCall.remove('hide-results-sprint');
    this.services.audioCall.remove('show-results-sprint');
    super.destroy();
  };

  hideResult = () => {
    this.element.style.display = 'none';
  };

  showResult = () => {
    this.element.style.display = 'block';
  };
}
