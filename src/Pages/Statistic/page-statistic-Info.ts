import Services from '../../Interfaces/services';
import BaseComponent from '../../Abstract/base-component';
import StatisticContainer from './statistic-container';

export default class StatisticInfoPage extends BaseComponent {
  private statisticContainer?: StatisticContainer;

  private title?: BaseComponent;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('section', 'statistic');
  }

  render = () => {
    this.destroy();
    this.parent.innerHTML = '';
    this.children = [
      (this.statisticContainer = new StatisticContainer(this.element, this.services)),
      (this.title = new BaseComponent('h6', 'statistic__title')),
    ];
    this.title.element.innerHTML = 'Статистика';
    this.statisticContainer.render();
    this.element.prepend(this.title.element, this.statisticContainer.element);
    this.parent.appendChild(this.element);
  };
}
