import Observer from '../Abstract/observer';
import { IUser, IUserToken } from '../Interfaces/user-model';
import { createUser, getUserTokken } from '../Model/api-user-autorise';
import { IFormService, IFormInputConponent } from '../Interfaces/interfaces';

export default class FormService extends Observer implements IFormService {
  user: IUser = {
    name: '',
    password: '',
    email: '',
  };

  userInfoAutorise: IUserToken = {
    message: '',
    token: '',
    refreshToken: '',
    userId: '',
    name: '',
  };

  btnClickAutorise = false;

  btnClickEnter = false;

  fullAllInput = false;

  fullEnterInput = false;

  loadWindow = () => {
    if (localStorage.getItem('userInfoTokken')) {
      this.showExitAutorise();
      this.showNameUser();
      this.hideBtnAutorise();
    }
  };

  clear = (): void => {
    this.user.name = '';
    this.user.password = '';
    this.user.email = '';
    this.btnClickAutorise = false;
    this.btnClickEnter = false;
    this.fullAllInput = false;
    this.fullEnterInput = false;
  };

  openFormFull = () => {
    this.dispatch('open-form-full');
  };

  closeFormFull = () => {
    this.dispatch('close-form-full');
    this.dispatch('clear-form');
  };

  openAutoriseForm = () => {
    this.dispatch('open-autorise-form');
  };

  closeAutoriseForm = () => {
    this.dispatch('close-autorise-form');
    this.dispatch('clear-form');
  };

  openEnterForm = () => {
    this.dispatch('open-enter-form');
  };

  closeEnterForm = () => {
    this.dispatch('close-enter-form');
    this.dispatch('clear-form');
  };

  showNameUser = () => {
    this.dispatch('show-user-name');
  };

  hideExitAutorise = () => {
    this.dispatch('hide-exit-autorise');
  };

  showExitAutorise = () => {
    this.dispatch('show-exit-autorise');
  };

  disabledBtnAutorise = () => {
    this.dispatch('disabled-btn-autorise');
  };

  unDisabledBtnAutorise = () => {
    this.dispatch('un-disabled-btn-autorise');
  };

  hideBtnAutorise = () => {
    this.dispatch('hide-container-autorise');
  };

  showBtnAutorise = () => {
    this.dispatch('show-container-autorise');
  };

  clearInput = () => {
    this.dispatch('clear-input');
  };

  errorMessage = () => {
    this.dispatch('error-message');
  };

  removeErrorMessage = () => {
    this.dispatch('remove-error-message');
  };

  showAutoriseError = () => {
    this.dispatch('show-autorise-error');
  };

  removeAutoriseError = () => {
    this.dispatch('remove-autorise-error');
  };

  clickAutorise = () => {
    this.btnClickAutorise = true;
    this.btnClickEnter = false;
    if (this.checkAllInput()) this.createNewUser();
    else this.showAutoriseError();
    console.log(this.btnClickAutorise, this.btnClickEnter);
  };

  clickEnter = () => {
    this.btnClickAutorise = false;
    this.btnClickEnter = true;
    if (this.user.password && this.user.email) {
      localStorage.setItem('userInfoEnter', JSON.stringify(this.user));
      this.getTokken();
    } else this.showAutoriseError();
  };

  createNewUser = async (): Promise<void> => {
    this.disabledBtnAutorise();
    const responseCreateAnswe = await createUser(this.user);
    if (typeof responseCreateAnswe === 'number') {
      this.showAutoriseError();
      this.unDisabledBtnAutorise();
      this.clearInput();
      this.clear();
      this.btnClickAutorise = false;
      this.btnClickEnter = false;
    } else {
      console.log(responseCreateAnswe);
      this.getTokken();
      this.removeAutoriseError();
    }
  };

  getTokken = async (): Promise<void> => {
    this.disabledBtnAutorise();
    const userItem = {
      email: this.user.email,
      password: this.user.password,
    };
    const answeToken = await getUserTokken(userItem);
    if (typeof answeToken === 'number') {
      this.showAutoriseError();
      this.unDisabledBtnAutorise();
      this.clearInput();
      this.clear();
    } else {
      this.userInfoAutorise = answeToken;
      this.clearInput();
      this.closeAutoriseForm();
      this.closeEnterForm();
      this.closeFormFull();
      this.hideBtnAutorise();
      this.showNameUser();
      this.showExitAutorise();
      this.clear();
      this.btnClickAutorise = false;
      this.btnClickEnter = false;
      this.removeAutoriseError();
      console.log(answeToken);
    }
  };

  checkAllInput = (): boolean => {
    if (this.user.name && this.user.password && this.user.email) {
      this.fullAllInput = true;
      localStorage.setItem('userInfoEnter', JSON.stringify(this.user));
      return true;
    }
    if (this.user.password && this.user.email && !this.btnClickEnter) {
      this.fullEnterInput = true;
      localStorage.setItem('userInfoEnter', JSON.stringify(this.user));
      return true;
    }
    this.fullAllInput = false;
    console.log('Не все поля заполнены');
    // this.showAutoriseError();
    return false;
  };

  checkInput(input: IFormInputConponent, value: string): void {
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

  checkPassword = (input: IFormInputConponent, val: string): void => {
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

  checkText = (input: IFormInputConponent, val: string): void => {
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

  checkEmail(input: IFormInputConponent, val: string): void {
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
