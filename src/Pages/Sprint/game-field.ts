import Services from '../../Service/service';
import BaseComponent from '../../Abstract/base-component';
import ButtonWithCallback from '../../components/button-with-callback';
import AudioBtnGameSprint from './audio-btn';

export default class FieldGame extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'game__field');
  }

  render = () => {
    const wrapperWordAudio = new BaseComponent('div', 'game__wrapper-word-audio').element;
    const fieldWords = new BaseComponent('div', 'game__words words').element;
    new AudioBtnGameSprint(wrapperWordAudio, this.services).render();
    wrapperWordAudio.prepend(fieldWords);

    const wordEnglish = new BaseComponent('h6', 'words__eng').element;
    wordEnglish.innerHTML = `Hello`;

    const wordRus = new BaseComponent('h6', 'words__rus').element;
    wordRus.innerHTML = `Привет`;
    fieldWords.append(wordEnglish, wordRus);

    const wrapperbutton = new BaseComponent('div', 'game__wrapper-btn').element;
    new ButtonWithCallback(
      wrapperbutton,
      this.services,
      'game__btn_false',
      'неверно ⇽',
      'button',
      this.services.sprint.btnFalseClick
    ).render();
    new ButtonWithCallback(
      wrapperbutton,
      this.services,
      'game__btn_true',
      'верно  ⇾',
      'button',
      this.services.sprint.btnTrueClick
    ).render();
    this.services.sprint.add('show-filed-game', this.showFiledGame);
    this.services.sprint.add('hide-filed-game', this.hideFiledGame);
    this.services.sprint.add('write-word-game', this.writeWordGame);
    this.element.prepend(wrapperWordAudio, wrapperbutton);
    this.parent.appendChild(this.element);
  };

  showFiledGame = () => {
    this.element.style.display = 'flex';
    this.services.sprint.resetSettingGame();
  };

  hideFiledGame = () => {
    this.element.style.display = 'none';
    this.services.sprint.resetSettingGame();
  };

  writeWordGame = () => {
    const englWord = this.services.sprint.getWordEngl()?.word;
    if (englWord) {
      this.element.children[0].children[0].children[0].innerHTML = englWord;
    }
    const rusWord = this.services.sprint.getRusWord();
    if (rusWord) {
      this.element.children[0].children[0].children[1].innerHTML = rusWord;
    }
  };
}
