import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';

export default class ButtonAudioTextbook extends BaseComponent<HTMLButtonElement> {
  constructor(private readonly parent: HTMLElement, private readonly service: Services, private readonly src: string) {
    super('div', 'cart__audio');
  }

  render = () => {
    this.element.addEventListener('click', () => {
      this.service.textbook.startAudio(this.src);
    });
    this.parent.appendChild(this.element);
  };
}
