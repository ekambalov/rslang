import Services from '../../Interfaces/services';
import BaseComponent from '../../Abstract/base-component';

export default class StatisticInfoPage extends BaseComponent {
  private statisticContainer?: BaseComponent;

  private title?: BaseComponent;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('section', 'statistic');
  }

  render = () => {
    this.destroy();
    this.parent.innerHTML = '';
    this.children = [
      (this.statisticContainer = new BaseComponent('div', 'statistic-container')),
      (this.title = new BaseComponent('h6', 'statistic__title')),
    ];
    this.title.element.innerHTML = 'Статистика';
    this.element.prepend(this.title.element, this.statisticContainer.element);
    this.parent.appendChild(this.element);
  };
}
