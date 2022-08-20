import BaseComponent from '../../Abstract/base-component';
import sliderTextFile from '../../Settings/slider-text.json';
import Services from '../../Service/service';

export default class Slider extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'slider');
  }

  render = () => {
    const sliderTextContainer = new BaseComponent('div', 'slider__text-container').element;
    const sliderDotsContainer = new BaseComponent('div', 'slider__dots-container').element;

    for (let i = 0; i < sliderTextFile.length; i += 1) {
      const itemSliderTxt = new BaseComponent('h4', 'text-container__item').element;
      itemSliderTxt.innerHTML = sliderTextFile[i];
      itemSliderTxt.style.display = i === 0 ? 'block' : 'none';
      sliderTextContainer.appendChild(itemSliderTxt);

      const itemDots = new BaseComponent('span', 'dots-container__item').element;
      itemDots.setAttribute('data-id', `${i}`);
      if (i === 0) itemDots.classList.add('activeDots');
      // this.services.slider.add('changing-slides', this.changingSlides(`${i}`));
      itemDots.addEventListener('click', (e: Event) => {
        const slideIndex = (e.target as HTMLElement).dataset.id as string;
        console.log(slideIndex);
        this.services.slider.changingSlides(slideIndex);
      });
      sliderDotsContainer.append(itemDots);
    }
    // this.services.slider.add('changing-slides', this.changingSlides();
    // this.services.slider.add('changing-slides', this.changingSlides('t'));
    this.element.append(sliderTextContainer, sliderDotsContainer);
    this.parent.appendChild(this.element);
  };

  changingSlides = (slideIndex: string) => {
    // const slideIndex = (e.target as HTMLElement).getAttribute('data-id') as string;
    const slides = document.getElementsByClassName('item');
    const dots = document.getElementsByClassName('slider__dots_item');
    for (let i = 0; i < slides.length; i += 1) {
      (slides[i] as HTMLHeadElement).style.display = 'none';
      dots[i].classList.remove('activeDots');
    }
    dots[+slideIndex].classList.add('activeDots');
    (slides[+slideIndex] as HTMLHeadElement).style.display = 'block';
  };
}
