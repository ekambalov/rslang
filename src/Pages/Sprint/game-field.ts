/* eslint-disable prefer-destructuring */
import Services from '../../Service/service';
import BaseComponent from '../../Abstract/base-component';
import ButtonWithCallback from '../../components/button-with-callback';
import AudioBtnGameSprint from './audio-btn';

export default class FieldGame extends BaseComponent {
  private wrapperWordAudio?: BaseComponent;

  private fieldWords?: BaseComponent;

  private audioBtnGameSprint?: AudioBtnGameSprint;

  private wordEnglish?: BaseComponent;

  private wordRus?: BaseComponent;

  private wrapperbutton?: BaseComponent;

  private buttonFalse?: ButtonWithCallback;

  private buttonTrue?: ButtonWithCallback;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'game__field');
  }

  render = () => {
    this.children = [
      (this.wrapperWordAudio = new BaseComponent('div', 'game__wrapper-word-audio')),
      (this.fieldWords = new BaseComponent('div', 'game__words words')),
      (this.audioBtnGameSprint = new AudioBtnGameSprint(this.wrapperWordAudio.element, this.services)),
      (this.wordEnglish = new BaseComponent('h6', 'words__eng')),
      (this.wordRus = new BaseComponent('h6', 'words__rus')),
      (this.wrapperbutton = new BaseComponent('div', 'game__wrapper-btn')),
      (this.buttonFalse = new ButtonWithCallback(
        this.wrapperbutton.element,
        this.services,
        'game__btn_false',
        'неверно ⇽',
        'button',
        this.services.sprint.btnFalseClick
      )),
      (this.buttonTrue = new ButtonWithCallback(
        this.wrapperbutton.element,
        this.services,
        'game__btn_true',
        'верно  ⇾',
        'button',
        this.services.sprint.btnTrueClick
      )),
    ];

    this.audioBtnGameSprint.render();
    this.wrapperWordAudio.element.prepend(this.fieldWords.element);

    // this.wordEnglish.element.innerHTML = `Hello`;
    // this.wordRus.element.innerHTML = `Привет`;
    this.fieldWords.element.append(this.wordEnglish.element, this.wordRus.element);

    this.buttonFalse.render();

    this.buttonTrue.render();

    this.services.sprint.add('write-word-game', this.writeWordGame);
    this.services.sprint.add('show-filed-game', this.showFiledGame);
    this.services.sprint.add('hide-filed-game', this.hideFiledGame);
    this.element.prepend(this.wrapperWordAudio.element, this.wrapperbutton.element);
    this.parent.appendChild(this.element);
  };

  showFiledGame = () => {
    this.element.style.display = 'flex';
    this.services.sprint.resetSettingGame();
  };

  hideFiledGame = () => {
    this.element.style.display = 'none';
  };

  writeWordGame = () => {
    console.log('в поле зашли');
    const englWordrusWord = this.services.sprint.getNewWord();
    console.log(englWordrusWord);
    if (englWordrusWord) {
      this.element.children[0].children[0].children[0].innerHTML = englWordrusWord[0];
      this.element.children[0].children[0].children[1].innerHTML = englWordrusWord[1];
    }
  };

  destroy = () => {
    this.services.sprint.remove('write-word-game');
    this.services.sprint.remove('show-filed-game');
    this.services.sprint.remove('hide-filed-game');
    super.destroy();
  };

  /* writeWordGame = () => {
    console.log('в поле зашли');
    const words = this.services.sprint.getNewWord();
    
    const englWord = this.services.sprint.getWordEngl()?.word;
    if (englWord) {
      this.element.children[0].children[0].children[0].innerHTML = englWord;
    }
    const rusWord = this.services.sprint.getRusWord();
    if (rusWord) {
      this.element.children[0].children[0].children[1].innerHTML = rusWord;
    }
  }; */
}
