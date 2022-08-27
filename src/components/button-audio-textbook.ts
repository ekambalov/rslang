import BaseComponent from '../Abstract/base-component';
import { baseUrl } from '../model/getTextbook';
import Services from '../Service/service';

export default class ButtonAudioTextbook extends BaseComponent<HTMLButtonElement> {
  private audio: HTMLAudioElement;

  private audioMeaning: HTMLAudioElement;

  private audioExample: HTMLAudioElement;

  private isPlayed: boolean;

  constructor(
    private readonly parent: HTMLElement,
    private readonly service: Services,
    private readonly src: string[]
  ) {
    super('div', 'cart__audio');
    this.audio = new Audio(baseUrl + this.src[0]);
    this.audioExample = new Audio(baseUrl + this.src[1]);
    this.audioMeaning = new Audio(baseUrl + this.src[2]);
    this.isPlayed = false;
  }

  render = () => {
    this.element.addEventListener('click', () => {
      if (this.isPlayed) {
        this.stop();
      } else {
        this.start();
      }
    });
    this.element.append(this.audio);
    this.parent.appendChild(this.element);

    this.audio.addEventListener('ended', () => {
      this.audioMeaning.play();
    });
    this.audioMeaning.addEventListener('ended', () => {
      this.audioExample.play();
    });
    this.audioExample.addEventListener('ended', () => {
      this.stop();
    });
  };

  stop() {
    this.audio.pause();
    this.audioMeaning.pause();
    this.audioExample.pause();
    this.audio.currentTime = 0;
    this.audioMeaning.currentTime = 0;
    this.audio.currentTime = 0;
    this.element.classList.remove('cart__audio--play');
    this.isPlayed = false;
  }

  start() {
    this.isPlayed = true;
    this.element.classList.add('cart__audio--play');
    this.audio.play();
  }
}
