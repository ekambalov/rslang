import BaseComponent from '../../Abstract/base-component';
import Services from '../../Interfaces/services';
import Answers from './answers';
import ButtonNext from './btn-next';
import AudioCallHeader from './header';
import ResultsGame from '../ResultGame/page';
import WordContainer from './word';

export default class AudioCall extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'audio-call');
  }

  render = () => {
    this.services.audioCall.add('stop-game', this.hideGame);
    this.services.audioCall.add('stop-game', this.showResults);
    this.services.audioCall.add('full-screen', this.makeFullScreen);
    this.services.audioCall.add('default-screen', this.makeDefaultScreen);
    this.services.audioCall.setWords();
    this.services.audioCall.resetGameData();
    this.services.audioCall.setNameGame();
    this.services.audioCall.playAudio();

    if (this.children.length) {
      this.destroy();
    }
    this.parent.innerHTML = '';
    this.children = [
      new AudioCallHeader(this.element, this.services),
      new WordContainer(this.element, this.services),
      new Answers(this.element, this.services),
      new ButtonNext(this.element, this.services),
    ];
    this.children.forEach((element) => {
      element.render();
    });
    this.parent.appendChild(this.element);
  };

  makeFullScreen = () => {
    this.element.requestFullscreen();
  };

  makeDefaultScreen = () => {
    document.exitFullscreen();
  };

  showResults = () => {
    this.children.push(new ResultsGame(this.element, this.services));
    this.children.forEach((item) => item.render());
  };

  hideGame = () => {
    this.children.forEach((child) => child.destroy());
    this.children = [];
  };
}
