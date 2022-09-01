import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';
import buttonsProps from '../../Settings/buttonsSelection.json';
import ButtonSelection from './button';

export default class SelectionContainer extends BaseComponent {
  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('div', 'selection-container');
  }

  render() {
    buttonsProps.forEach((button, idx) => {
      this.children.push(new ButtonSelection(this.element, this.services, button));
      this.children[idx].render();
    });

    this.parent.appendChild(this.element);
  }
}
