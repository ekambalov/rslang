import Services from '../Interfaces/services';
import BaseComponent from '../Abstract/base-component';
import State from '../Model/state';

const levels: string[] = ['Уровень 1', 'Уровень 2', 'Уровень 3', 'Уровень 4', 'Уровень 5', 'Уровень 6'];

export default class TextBookSettings extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'textbook__settings settings');
  }

  render = () => {
    this.destroy();

    const path = document.location.hash.toLowerCase();
    const page = path.slice(path.indexOf('page') + 5, path.indexOf('&'));
    const group = path.slice(path.indexOf('group') + 6);
    if (Number.isNaN(Number(page)) || Number(page) <= 0) {
      State.textbook.currentPage = 0;
    } else if (Number(page) > 29) {
      State.textbook.currentPage = 29;
    } else {
      State.textbook.currentPage = Number(page);
    }

    if (Number.isNaN(Number(group)) || Number(group) <= 0) {
      State.textbook.currentLevel = 0;
    } else if (Number(group) > 5) {
      State.textbook.currentLevel = 5;
    } else {
      State.textbook.currentLevel = Number(group);
    }
    const levelSelector = new BaseComponent('select', 'settings__level level').element as HTMLSelectElement;
    levels.forEach((stage) => {
      const level = new BaseComponent('option', 'level__item').element as HTMLOptionElement;
      level.textContent = stage;
      levelSelector.append(level);
    });
    levelSelector.value = `Уровень ${State.textbook.currentLevel + 1}`;
    const navigation = new BaseComponent('div', 'settings__nav').element as HTMLDivElement;
    const prevBtn = new BaseComponent('a', 'settings__prev').element as HTMLLinkElement;
    prevBtn.textContent = '<';
    prevBtn.href =
      State.textbook.currentPage <= 0
        ? `#/book?page=${0}&group=${State.textbook.currentLevel}`
        : `#/book?page=${State.textbook.currentPage - 1}&group=${State.textbook.currentLevel}`;
    const nextBtn = new BaseComponent('a', 'settings__next').element as HTMLLinkElement;
    nextBtn.textContent = '>';
    nextBtn.href =
      State.textbook.currentPage >= 29
        ? `#/book?page=${29}&group=${State.textbook.currentLevel}`
        : `#/book?page=${State.textbook.currentPage + 1}&group=${State.textbook.currentLevel}`;
    const currentPage = new BaseComponent('span', 'settings__page').element;
    currentPage.textContent = `${State.textbook.currentPage + 1}`;
    navigation.append(prevBtn, currentPage, nextBtn);
    const sprintLink = new BaseComponent('a', 'settings__link').element as HTMLLinkElement;
    sprintLink.textContent = 'Спринт';
    sprintLink.href = '#/sprint';
    sprintLink.addEventListener('click', () => {
      State.textbook.fromTextbook = true;
    });
    const audioCallLink = new BaseComponent('a', 'settings__link').element as HTMLLinkElement;
    audioCallLink.textContent = 'Аудиовызов';
    audioCallLink.href = '#/audio-call';
    this.element.append(levelSelector, navigation, audioCallLink, sprintLink);
    this.parent.appendChild(this.element);
    nextBtn.addEventListener('click', () => {
      nextBtn.href = `#/book?page=${State.textbook.currentPage + 1}&group=${State.textbook.currentLevel}`;
    });
    prevBtn.addEventListener('click', () => {
      if (State.textbook.currentPage === 0) return;
      prevBtn.href = `#/book?page=${State.textbook.currentPage - 1}&group=${State.textbook.currentLevel}`;
    });
    levelSelector.addEventListener('change', () => {
      const levelNumber = Number(levelSelector.value.slice(-1)) - 1;
      window.location.href = `#/book?page=${0}&group=${levelNumber}`;
    });

    if (localStorage.getItem('userInfoTokken')) {
      const vocabularyLink = new BaseComponent('a', 'settings__link').element as HTMLLinkElement;
      vocabularyLink.textContent = 'Сложные слова';
      vocabularyLink.href = '#/vocabulary';
      this.element.append(vocabularyLink);
    }
  };
}
