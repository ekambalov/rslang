import BaseComponent from '../Abstract/base-component';
import { IOptionsInput, IFormInputConponent } from '../Interfaces/interfaces';
import Services from '../Service/service';

export interface OptionsInput {
  title: string;
  id: string;
  type: string;
  name: string;
}

export class FormInput extends BaseComponent implements IFormInputConponent {
  messageElement?: HTMLElement;

  readonly type: string;

  readonly name: string;

  readonly title: string;

  readonly id: string;

  constructor(readonly parent: HTMLElement, readonly services: Services, readonly options: IOptionsInput) {
    super('div', 'form__item');
    this.type = options.type;
    this.name = options.name;
    this.title = options.title;
    this.id = options.id;
  }

  render(): void {
    this.element.innerHTML = `
      <label class="form__label" for="${this.id}">${this.title}</label>
      <input class="form__input" type="${this.type}" id="${this.id}" name="${this.name}" autocomplete="off">`;

    this.messageElement = new BaseComponent('p', 'message-error').element;
    this.messageElement.textContent = '';
    this.element.appendChild(this.messageElement);
    this.parent.appendChild(this.element);

    this.element.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      this.services.form.checkInput(this, target.value);
    };
    this.services.form.add('error-message', this.error);
    this.services.form.add('remove-error-message', this.removeErrorMessage);
    this.services.form.add('clear-input', this.clearInput);
  }

  destroy = () => {
    this.services.form.remove('error-message');
    this.services.form.remove('remove-error-message');
    this.services.form.remove('clear-input');
    super.destroy();
  };

  clear(): void {
    this.element.classList.remove('success');
    this.element.classList.remove('error');
  }

  clearInput(): void {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i += 1) {
      inputs[i].value = '';
    }
  }

  success(): void {
    this.clear();
    this.removeErrorMessage();
  }

  error(message: string): void {
    this.clear();
    if (this.messageElement) {
      this.messageElement.textContent = message;
    }
    this.element.classList.add('error');
  }

  removeErrorMessage(): void {
    this.clear();
    if (this.messageElement) {
      this.messageElement.textContent = '';
    }
    this.element.classList.remove('error');
  }
}
