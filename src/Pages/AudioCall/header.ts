import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';
import StatusBar from './status-bar';

export default class AudioCallHeader extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'audio-call-header');
  }

  render(): void {
    const btnFullScreen = new BaseComponent<HTMLButtonElement>('button', 'audio-call-header__btn-fullscreen').element;

    this.element.appendChild(btnFullScreen);

    new StatusBar(this.element, this.services).render();

    const btnExit = new BaseComponent<HTMLButtonElement>('button', 'audio-call-header__btn-exit').element;

    this.element.appendChild(btnExit);

    btnExit.addEventListener('click', () => {
      document.location.hash = '#/main';
    });

    this.parent.appendChild(this.element);
  }
}
