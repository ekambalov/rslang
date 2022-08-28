import Services from '../Service/service';
import BaseComponent from '../Abstract/base-component';
import State from '../model/state';

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
    const navigation = new BaseComponent('div', 'settings__nav').element as HTMLDivElement;
    const prevBtn = new BaseComponent('button', 'settings__prev').element;
    prevBtn.textContent = '<';
    const nextBtn = new BaseComponent('button', 'settings__next').element;
    nextBtn.textContent = '>';
    const currentPage = new BaseComponent('span', 'settings__page').element;
    currentPage.textContent = `${State.textbook.currentPage + 1}`;
    navigation.append(prevBtn, currentPage, nextBtn);
    this.element.append(levelSelector, navigation);
    this.parent.appendChild(this.element);
    nextBtn.addEventListener('click', () => {
      this.services.textbook.nextPage();
    });
    prevBtn.addEventListener('click', () => {
      this.services.textbook.prevPage();
    });
    levelSelector.addEventListener('change', () => {
      const levelNumber = Number(levelSelector.value.slice(-1)) - 1;
      this.services.textbook.setLevel(levelNumber);
    });
  };
}
