/* eslint-disable import/no-cycle */
import Observer from '../Abstract/observer';
import { FormInput } from '../components/form-Input';
import { IUser } from '../Interfaces/user-model';
import { createUser, getUserTokken } from '../model/api-user-autorise';

export default class FormService extends Observer {
  user: IUser = {
    name: '',
    password: '',
    email: '',
  };

  btnClickAutorise = false;

  btnClickEnter = false;

  fullAllInput = false;

  loadWindow = () => {
    if (localStorage.getItem('state')) {
      this.showExitAutorise();
      this.hideBtnAutorise();
    }
  };

  clickAutorise = () => {
    this.btnClickAutorise = true;
    this.btnClickEnter = false;
    console.log(this.btnClickAutorise, this.btnClickEnter);
  };

  clickEnter = () => {
    this.btnClickAutorise = false;
    this.btnClickEnter = true;
    console.log(this.btnClickAutorise, this.btnClickEnter);
  };

  openAutoriseForm = () => {
    this.dispath('open-autorise');
  };

  closeAutoriseForm = () => {
    this.dispath('close-autorise');
    this.dispath('clear-form');
  };

  clearForm = () => {
    this.dispath('clear-form');
  };

  showNameUser = () => {
    this.dispath('show-user-name');
  };

  hideExitAutorise = () => {
    this.dispath('hide-exit-autorise');
  };

  disabledBtnAutorise = () => {
    this.dispath('disabled-btn-autorise');
  };

  unDisabledBtnAutorise = () => {
    this.dispath('un-disabled-btn-autorise');
  };

  showExitAutorise = () => {
    this.dispath('show-exit-autorise');
  };

  hideBtnAutorise = () => {
    this.dispath('hide-button-autorise');
  };

  showBtnAutorise = () => {
    this.dispath('show-button-autorise');
  };

  clearInput = () => {
    this.dispath('clear-input');
  };

  errorMessage = () => {
    this.dispath('error-message');
  };

  removeErrorMessage = () => {
    this.dispath('remove-error-message');
  };

  clear(): void {
    this.user.name = '';
    this.user.password = '';
    this.user.email = '';
  }

  autoriseNewUser = async (): Promise<void> => {
    this.disabledBtnAutorise();
    await createUser(this.user);
    const userTokken = {
      email: this.user.email,
      password: this.user.password,
    };
    await getUserTokken(userTokken);
    this.clearInput();
    this.closeAutoriseForm();
    this.hideBtnAutorise();
    this.showNameUser();
    this.showExitAutorise();
    this.clear();
    this.btnClickAutorise = false;
  };

  checkAllInput = () => {
    if (this.user.name && this.user.password && this.user.email) {
      this.fullAllInput = true;
      if (!this.btnClickAutorise) {
        this.autoriseNewUser();
      }
    } else {
      this.fullAllInput = false;
      console.log('Не все поля заполнены');
    }
  };

  checkInput(input: FormInput, value: string): void {
    if (input.type === 'text') {
      this.checkText(input, value);
    }
    if (input.type === 'email') {
      this.checkEmail(input, value);
    }
    if (input.type === 'password') {
      this.checkPassword(input, value);
    }
    this.checkAllInput();
  }

  checkPassword = (input: FormInput, val: string): void => {
    const value = val.trim();
    this.user.password = '';
    if (value.length === 0) {
      input.error('Поле не может быть пустым');
      return;
    }
    if (value.length > 30) {
      input.error('Не более 30 символов');
      return;
    }
    if (value.length < 8) {
      input.error('Не менее 8 символов');
      return;
    }
    this.user.password = value;
    input.success();
  };

  checkText = (input: FormInput, val: string): void => {
    const value = val.trim();
    this.user.name = '';

    if (value.length === 0) {
      input.error('Поле не может быть пустым');
      return;
    }

    if (value.length > 30) {
      input.error('Не более 30 символов');
      return;
    }
    if (value.length < 3) {
      input.error('Не менее 3 символов');
      return;
    }

    if (/^(\d|\s)+$/gi.test(value)) {
      input.error('Должны быть буквы');
      return;
    }

    const isSymbol = !/^[^~!@#$%*()—+=|:;"'`<>,.?/^]*(\w|\s|[а-я])+$/gi.test(value);
    if (isSymbol || /_/g.test(value)) {
      input.error('Не могут быть служебные символы');
      return;
    }
    this.user.name = value;
    input.success();
  };

  checkEmail(input: FormInput, val: string): void {
    const value = val.trim();
    this.user.email = '';

    if (value.length === 0) {
      input.error('Email не может быть пустым');
      return;
    }

    if (value.length > 30) {
      input.error('Email не более 30 символов');
      return;
    }

    const index = value.lastIndexOf('@');
    if (index === -1) {
      input.error('Email должно быть по стандарту RFC');
      return;
    }

    const leftPart = value.slice(0, index);
    const rightPart = value.slice(index + 1);
    if (leftPart.length === 0 || rightPart.length === 0) {
      input.error('Email должно быть по стандарту RFC');
      return;
    }

    const regLeft = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))$/;
    const regRightOne = /^(\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])$/;
    const regRightSecond = /^(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;

    const isValid = regLeft.test(leftPart) && (regRightOne.test(rightPart) || regRightSecond.test(rightPart));

    if (!isValid) {
      input.error('Email должно быть по стандарту RFC');
      return;
    }

    this.user.email = value;
    input.success();
  }
}
