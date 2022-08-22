import BaseComponent from '../Abstract/base-component';
// eslint-disable-next-line import/no-cycle
import Services from '../Service/service';
import { IOptionsInput } from '../Interfaces/interfaces';

export interface OptionsInput {
  title: string;
  id: string;
  type: string;
  name: string;
}

export class FormInput extends BaseComponent {
  private messageElement?: HTMLElement;

  readonly type: string;

  readonly name: string;

  readonly title: string;

  readonly id: string;

  constructor(
    private readonly parent: HTMLElement,
    private readonly services: Services,
    private readonly options: IOptionsInput
  ) {
    super('div', 'form__item');
    this.type = options.type;
    this.name = options.name;
    this.title = options.title;
    this.id = options.id;
  }

  render(): void {
    this.element.innerHTML = `
      <label class="form__label" for="${this.id}">${this.title}</label>
      <input class="form__input" type="${this.type}" id="${this.id}" name="${this.name}" autocomplete="off">
    `;
    this.messageElement = new BaseComponent('p', 'message-error').element;
    this.messageElement.textContent = 'Here message about error';
    this.element.appendChild(this.messageElement);
    this.parent.appendChild(this.element);

    this.element.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      this.services.dataBase.checkInput(this, target.value);
    };
  }

  clear(): void {
    this.element.classList.remove('success');
    this.element.classList.remove('error');
  }

  success(): void {
    this.clear();
    this.element.classList.add('success');
  }

  error(message: string): void {
    this.clear();
    if (this.messageElement) {
      this.messageElement.textContent = message;
    }
    this.element.classList.add('error');
  }
}
