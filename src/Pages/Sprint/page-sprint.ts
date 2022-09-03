import Services from '../../Interfaces/services';
import BaseComponent from '../../Abstract/base-component';
import GameContainer from './game-container';
import AudioTrueFalseBtn from './audio-btn-true-false';

export default class SprintPage extends BaseComponent {
  private audioTrueFalseBtn?: AudioTrueFalseBtn;

  private btnContainer?: BaseComponent;

  private gameContainer?: GameContainer;

  private btnReturn?: BaseComponent;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('section', 'sprint');
  }

  render = () => {
    this.destroy();
    this.parent.innerHTML = '';
    this.children = [
      (this.btnContainer = new BaseComponent('div', 'spint_btn-container')),
      (this.audioTrueFalseBtn = new AudioTrueFalseBtn(this.btnContainer.element, this.services)),
      (this.gameContainer = new GameContainer(this.element, this.services)),
      (this.btnReturn = new BaseComponent('a', 'spint_btn-exit-game')),
    ];

    this.audioTrueFalseBtn.render();

    this.btnReturn.element.innerText = 'X';
    this.btnReturn.element.setAttribute('href', `#/main`);
    this.btnContainer.element.append(this.btnReturn.element);
    this.element.prepend(this.btnContainer.element);
    this.gameContainer.render();
    this.parent.appendChild(this.element);
  };
}
