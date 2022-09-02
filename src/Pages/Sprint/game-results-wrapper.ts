import BaseComponent from '../../Abstract/base-component';
import TableBodyResultsGame from './game-results-table-body';
import Services from './../../Interfaces/services';

export default class ResultsWrapper extends BaseComponent<HTMLDivElement> {
  private countWordTrue?: BaseComponent;

  private wordTrueTable?: TableBodyResultsGame;

  private countWordFalse?: BaseComponent;

  private wordFalseTable?: TableBodyResultsGame;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'result');
  }

  render = () => {
    this.services.sprint.add('write-results-sprint', this.writeResult);
    this.children = [
      (this.countWordTrue = new BaseComponent('h6', 'results__count')),
      (this.wordTrueTable = new TableBodyResultsGame(
        this.element,
        this.services,
        this.services.sprint.arrayWordsAnsweTrue
      )),
      (this.countWordFalse = new BaseComponent('h6', 'results__count')),
      (this.wordFalseTable = new TableBodyResultsGame(
        this.element,
        this.services,
        this.services.sprint.arrayWordsAnsweFalse
      )),
    ];

    this.element.prepend(this.countWordTrue.element);
    this.wordTrueTable.render();
    this.element.append(this.countWordFalse.element);
    this.wordFalseTable.render();
    this.parent.appendChild(this.element);
  };

  destroy = () => {
    this.services.sprint.remove('write-results-sprint');
    super.destroy();
  };

  writeResult = () => {
    const trueAnswe = this.services.sprint.arrayWordsAnsweTrue.length;
    const falseAnswe = this.services.sprint.arrayWordsAnsweFalse.length;

    this.element.children[0].innerHTML = `Верно:  ${trueAnswe}`;
    this.element.children[2].innerHTML = `Неверно:  ${falseAnswe}`;
  };
}
