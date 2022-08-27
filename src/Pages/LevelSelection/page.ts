import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';
import SelectionContainer from './selection-container';

export default class LevelSelection {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {}

  render() {
    this.parent.innerHTML = '';
    const container = new BaseComponent('div').element;
    const title = new BaseComponent('h1', 'level-selection__title').element;
    title.textContent = 'Аудио вызов';
    container.appendChild(title);
    const text = new BaseComponent('p', 'level-selection__text').element;
    text.textContent = 'Выберите уровень';
    container.appendChild(text);
    new SelectionContainer(container, this.services).render();

    this.parent.appendChild(container);
  }

  showLevelSelection() {}
}
