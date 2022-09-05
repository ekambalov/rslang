import BaseComponent from '../Abstract/base-component';
import { baseUrl } from '../model/getTextbook';
import State from '../model/state';
import Services from '../Interfaces/services';

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
    this.destroy();

    this.element.addEventListener('click', () => {
      if (State.textbook.isPlayed && this.element.classList.contains('cart__audio--play')) {
        this.stop();
      } else {
        this.start();
      }
    });
    this.element.append(this.audio, this.audioMeaning, this.audioExample);
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

  private stop() {
    const audioItems = document.querySelectorAll('audio');
    audioItems?.forEach((audio) => {
      audio.pause();
      const item = audio;
      item.currentTime = 0;
    });
    document.querySelectorAll('.cart__audio')?.forEach((block) => {
      block.classList.remove('cart__audio--play');
    });
    State.textbook.isPlayed = false;
  }

  private start() {
    if (State.textbook.isPlayed) this.stop();
    State.textbook.isPlayed = true;
    this.element.classList.add('cart__audio--play');
    this.audio.play();
  }
}
