/* eslint-disable import/no-cycle */
import BaseComponent from '../Abstract/base-component';
import Services from '../Service/service';
import { IOptionsInput } from '../Interfaces/interfaces';
import Label from './label';
import Input from './input';

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
    const label = new Label(this.element, this.services, 'form__label', this.title, this.id).element;
    const input = new Input(this.element, this.services, 'form__input', this.id, this.type, this.name).element;
    this.messageElement = new BaseComponent('p', 'message-error').element;
    this.messageElement.textContent = '';
    this.element.append(label, input, this.messageElement);
    this.parent.appendChild(this.element);

    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      this.services.form.checkInput(this, target.value);
    };
    this.services.form.add('error-message', this.error);
    this.services.form.add('remove-error-message', this.removeErrorMessage);
    // this.services.form.add('clear-form', this.clearForm);
  }

  // clearForm(): void {
  //  this.element.classList.remove('error');
  // }

  clear(): void {
    this.element.classList.remove('success');
    this.element.classList.remove('error');
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
