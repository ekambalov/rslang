import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';
import StatusBar from './status-bar';

export default class AudioCallHeader extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'audio-call-header');
  }

  render(): void {
    const btnFullScreen = new BaseComponent<HTMLButtonElement>('button', 'audio-call-header__btn-fullscreen').element;
    this.element.prepend(btnFullScreen);
    new StatusBar(this.element, this.services).render();
    const btnExit = new BaseComponent<HTMLButtonElement>('button', 'audio-call-header__btn-exit').element;
    btnExit.textContent = 'X';
    btnExit.addEventListener('click', () => {
      document.location.hash = '#/main';
    });
    this.element.append(btnExit);
    this.parent.appendChild(this.element);
  }
}
