import { IComponent } from '../../../InterfaseComponent';
import './slider.css';

class Slider implements IComponent {
    currentSlide(e: Event): void {
        const slides = document.getElementsByClassName('item');
        const dots = document.getElementsByClassName('slider-dots_item');
        const slideIndex = (e.target as HTMLSpanElement).getAttribute('data-id') as string;
        for (let i = 0; i < slides.length; i += 1) {
            (slides[i] as HTMLHeadElement).style.display = 'none';
            dots[i].classList.remove('active');
        }
        dots[+slideIndex].classList.add('active');
        (slides[+slideIndex] as HTMLHeadElement).style.display = 'block';
    }

    start(): HTMLDivElement {
        const wrapper = document.createElement('div') as HTMLDivElement;
        wrapper.classList.add('header__textBlock_wrapper');

        const slider = document.createElement('div') as HTMLDivElement;
        slider.classList.add('header__textBlock_slider');

        const txtSlider = [
            'Теперь учить английский язык легко и увлекательно! Играйте в мини-игры и учите запоминайте слова.Повторяйте их каждый день для закрепления результата',
            'Электронный учебник состоит из шести разделов. В каждом разделе 30 страниц по 20 слов. Представлены перевод слова, тематическое изображение, а также произношение слова.',
            'Для изучения слов и закрепления запоминания в приложении есть 2 игры: "Спринт"  и "Аудиовызов". Они  помогут Вам в игровой форме «прокачать» словарный запас.',
            'Весь прогресс обучения можно посмотреть в статистике, где представлены данные как за текущий день, так и за весь период обучения.',
        ];
        const sliderDots = document.createElement('div') as HTMLDivElement;
        sliderDots.classList.add('slider-dots');

        for (let i = 0; i < txtSlider.length; i += 1) {
            const itemSlider = document.createElement('h4') as HTMLHeadingElement;
            itemSlider.classList.add('item');
            itemSlider.innerHTML = txtSlider[i];
            slider.append(itemSlider);
            itemSlider.style.display = i === 0 ? 'block' : 'none';

            const itemDots = document.createElement('span') as HTMLSpanElement;
            itemDots.classList.add('slider-dots_item');
            itemDots.setAttribute('data-id', `${i}`);
            if (i === 0) itemDots.classList.add('active');
            itemDots.addEventListener('click', this.currentSlide);
            sliderDots.append(itemDots);
        }

        wrapper.append(slider, sliderDots);
        return wrapper;
    }
}

export default Slider;
