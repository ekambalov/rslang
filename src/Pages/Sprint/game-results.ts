import Services from '../../Service/service';
import BaseComponent from '../../Abstract/base-component';
import TableBodyResultsGame from './game-results-table-body';
// import State from '../../model/state';
import State from '../../model/state';

export default class ResultsGameSprint extends BaseComponent<HTMLDivElement> {
  private title?: BaseComponent;

  private countWordTrue?: BaseComponent;

  private wordTrueTable?: TableBodyResultsGame;

  private countWordFalse?: BaseComponent;

  private wordFalseTable?: TableBodyResultsGame;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'game__results');
  }

  render = () => {
    this.services.sprint.add('hide-results-sprint', this.hideResult);
    this.services.sprint.add('show-results-sprint', this.showResult);
    this.services.sprint.add('write-results-sprint', this.writeResult);
    this.children = [
      (this.title = new BaseComponent('h6', 'results__title')),
      (this.countWordTrue = new BaseComponent('h6', 'results__count')),
      (this.wordTrueTable = new TableBodyResultsGame(
        this.element,
        this.services,
        this.services.sprint.arrayWordsAnsweTrue
      )),
      (this.countWordFalse = new BaseComponent('h6', 'results__count')),
      (this.wordFalseTable = new TableBodyResultsGame(this.element, this.services, State.words)),
    ];

    this.title.element.innerHTML = 'Pезультаты игры';
    this.element.prepend(this.title.element, this.countWordTrue.element);
    this.wordTrueTable.render();
    this.element.append(this.countWordFalse.element);
    this.wordFalseTable.render();
    this.parent.appendChild(this.element);
  };

  destroy = () => {
    this.services.sprint.remove('hide-results-sprint');
    this.services.sprint.remove('show-results-sprint');
    this.services.sprint.remove('write-results-sprint');
    super.destroy();
  };

  hideResult = () => {
    this.element.style.display = 'none';
  };

  showResult = () => {
    this.element.style.display = 'block';
  };

  writeResult = () => {
    const trueAnswe = this.services.sprint.arrayWordsAnsweTrue.length;
    const falseAnswe = this.services.sprint.arrayWordsAnsweFalse.length;

    this.element.children[1].innerHTML = `Верно ${trueAnswe} слов`;
    this.element.children[3].innerHTML = `Неверно ${falseAnswe} слов`;
  };
}
