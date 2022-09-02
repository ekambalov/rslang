import BaseComponent from '../../Abstract/base-component';
import Services from '../../Interfaces/services';

export default class ListStatistics extends BaseComponent {
  constructor(
    private readonly parent: HTMLElement,
    private readonly services: Services,
    private props: { className: string }
  ) {
    super('ul', props.className);
  }

  render = () => {
    this.element.
  };
}
