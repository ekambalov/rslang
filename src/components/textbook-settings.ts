import Services from '../Service/service';
import BaseComponent from '../Abstract/base-component';

const levels: string[] = ['Уровень 1', 'Уровень 2', 'Уровень 3', 'Уровень 4', 'Уровень 5', 'Уровень 6'];

export default class TextBookSettings extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'textbook__settings settings');
  }

  render = () => {
    const levelSelector = new BaseComponent('select', 'settings__level level').element as HTMLSelectElement;
    levels.forEach((stage) => {
      const level = new BaseComponent('option', 'level__item').element as HTMLOptionElement;
      level.textContent = stage;
      levelSelector.append(level);
    });

    this.element.append(levelSelector);
    this.parent.appendChild(this.element);
  };
}
