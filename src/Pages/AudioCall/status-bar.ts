import BaseComponent from '../../Abstract/base-component';
import Services from '../../Service/service';

export default class StatusBar extends BaseComponent {
  private total?: HTMLElement;

  private current?: HTMLElement;

  constructor(private readonly parent: HTMLElement, private readonly services: Services) {
    super('p', 'audio-call-header__status-bar status-bar');
  }

  render = async () => {
    this.current = new BaseComponent('span', 'status-bar__current').element;
    this.current.textContent = '0/';
    this.services.audioCall.add('next-word', this.updateCurrentStatus);

    this.total = new BaseComponent('span', 'status-bar__current').element;
    this.total.textContent = `${20}`;

    this.element.appendChild(this.current);
    this.element.appendChild(this.total);

    this.parent.appendChild(this.element);
  };

  updateCurrentStatus = (currentStatus: string) => {
    if (this.current) {
      this.current.textContent = currentStatus;
    }
  };
}
