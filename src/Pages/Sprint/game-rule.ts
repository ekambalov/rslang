import Services from '../../Service/service';
import BaseComponent from '../../Abstract/base-component';
import ButtonWithCallback from '../../components/button-with-callback';

export default class RuleGame extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'game__rule');
  }

  render = () => {
    const rule = new BaseComponent('h6', 'rule__txt').element;
    rule.insertAdjacentHTML(
      'afterbegin',
      `Вам необходимо выбрать правильный перевод слова из предложенных вариантов.<br> Время игры: 60 секунд. <br> Для управления используйте мышь или клавиши ⇽ ⇾.<br> Готовы? Тогда вперёд! `
    );
    new ButtonWithCallback(
      this.element,
      this.services,
      'rule__btn_start',
      'start',
      'button',
      this.services.sprint.startTimer
    ).render();
    this.services.sprint.add('hide-rule-sprint', this.hideRule);
    this.services.sprint.add('show-rule-sprint', this.showRule);
    this.element.prepend(rule);
    this.parent.appendChild(this.element);
  };

  hideRule = () => {
    this.element.style.display = 'none';
    this.services.sprint.startTimer();
  };

  showRule = () => {
    this.element.style.display = 'block';
  };
}
