import Services from '../../Service/service';
import BaseComponent from '../../Abstract/base-component';
import ButtonWithCallback from '../../components/button-with-callback';

export default class FieldGame extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'game__field');
  }

  render = () => {
    const wrapperWordAudio = new BaseComponent('div', 'game__wrapper-word-audio').element;
    const fieldWords = new BaseComponent('div', 'game__words words').element;
    const fieldAudio = new BaseComponent('div', 'game__audio').element;
    wrapperWordAudio.append(fieldWords, fieldAudio);
    const wordEnglish = new BaseComponent('h6', 'words__eng').element;
    wordEnglish.innerHTML = 'Hello';
    const wordRus = new BaseComponent('h6', 'words__rus').element;
    wordRus.innerHTML = 'Привет';
    fieldWords.append(wordEnglish, wordRus);
    const wrapperbutton = new BaseComponent('div', 'game__wrapper-btn').element;
    new ButtonWithCallback(
      wrapperbutton,
      this.services,
      'game__btn_false',
      'неверно ⇽',
      'button',
      this.services.sprint.startGameSprint // временная заглушка
    ).render();
    new ButtonWithCallback(
      wrapperbutton,
      this.services,
      'game__btn_true',
      'верно  ⇾',
      'button',
      this.services.sprint.startGameSprint // временная заглушка
    ).render();
    this.services.sprint.add('show-filed-game', this.showFiledGame);
    this.services.sprint.add('hide-filed-game', this.hideFiledGame);
    this.element.prepend(wrapperWordAudio, wrapperbutton);
    this.parent.appendChild(this.element);
  };

  showFiledGame = () => {
    this.element.style.display = 'flex';
    this.services.sprint.resetTimerAndCount();
  };

  hideFiledGame = () => {
    this.element.style.display = 'none';
    this.services.sprint.resetTimerAndCount();
  };
}
