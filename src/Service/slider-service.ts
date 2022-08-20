import Observer from '../Abstract/observer';

export default class SliderService extends Observer {
  changingSlides = (idSlider: string) => {
    this.dispath('changing-slides', idSlider);
  };
}
