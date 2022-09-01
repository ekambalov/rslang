import BaseComponent from '../../Abstract/base-component';
import Services from '../../Interfaces/services';
import ButtonSelect from './button-answer';

export default class Answers extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'answers-container');
  }

  render = () => {
    const translateOptions: string[] = this.services.audioCall.getTranslateOptions();
    translateOptions.forEach((option, idx) => {
      this.children.push(new ButtonSelect(this.element, this.services, option));
      this.children[idx].render();
    });

    this.parent.appendChild(this.element);
  };
}
