import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';

interface IButtonSelectionProps {
  className: string;
  content: string;
  group: string;
}

export default class ButtonSelection extends BaseComponent<HTMLButtonElement> {
  constructor(
    private readonly parent: HTMLElement,
    private readonly services: Services,
    private props: IButtonSelectionProps
  ) {
    super('button', `${props.className}`);
  }

  render() {
    this.element.textContent = this.props.content;
    this.element.setAttribute('data-group', this.props.group);
    this.element.addEventListener('click', this.selectLevel);
    this.parent.appendChild(this.element);
  }

  selectLevel = () => {
    const { group } = this.element.dataset;
    if (group) {
      this.services.dataBase.getWordsByLevel(+group);
    } else {
      throw new Error('group is undefined');
    }
  };
}
