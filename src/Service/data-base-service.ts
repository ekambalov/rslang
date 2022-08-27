import Observer from '../Abstract/observer';
// eslint-disable-next-line import/no-cycle
import { FormInput } from '../components/form-Input';
import { IWord } from '../Interfaces/interfaces';
import { UserModel } from '../Interfaces/user-model';
import { getWords } from '../Models/data-base';
import getRandomInteger from '../utils/utils';

export default class DataBaseServices extends Observer {
  firstPage = 0;

  lastPage = 29;

  amountWords = 0;

  words?: IWord[];

  gamePath = '';

  user: UserModel = {
    firstName: '',
    password: '',
    email: '',
    isAutorise: false,
  };

  isAutorise = false;

  getWordsByLevel = async (level: number) => {
    const random = getRandomInteger(this.firstPage, this.lastPage);
    const words = await getWords(level, random);
    this.words = words;
    this.playSelectionGame();
  };

  playSelectionGame() {
    document.location.href = this.gamePath;
  }
  // constructor() {
  //   super();
  //  this.session();
  // }

  /*
  async session(): Promise<void> {
    const email = sessionStorage.getItem('rs-lang-autorise-user');
    if (email) {
      this.isAutorise = true;
      const user: UserModel | null = await getUser(email);
      if (user) {
        this.user = user;
        this.dispath('account');
      }
    }
  }
 
  async action(action: string): Promise<void> {
    if (action === 'registration') {
      this.dispath('registration');
    }
    if (action === 'addUser') {
      if (!this.user.image) {
        this.user.image = './assets/no-user.png';
      }
 
      const user: UserModel | null = await getUser(this.user.email);
      if (user) {
        const userScore = user.score;
        this.user.score = this.user.score < userScore ? userScore : this.user.score;
        await updateUser(this.user);
      } else {
        await addUser(this.user);
      }
 
      sessionStorage.setItem('match-match-game', this.user.email);
      this.dispath('account');
      this.isUser = true;
      document.location.hash = '#/score';
    }
    if (action === 'update') {
      await updateUser(this.user);
      this.dispath('account');
      document.location.hash = '#/score';
    }
    if (action === 'cancel') {
      document.location.hash = '#/score';
    }
  }
 
  clear(): void {
    this.user.lastName = '';
    this.user.firstName = '';
    this.user.email = '';
    this.user.image = '';
  }
*/
  checkAllInput(): void {
    if (this.user.firstName && this.user.password && this.user.email) {
      this.dispath('check-all-input', 'true');
    } else {
      this.dispath('check-all-input', 'false');
    }
  }

  checkInput(input: FormInput, value: string): void {
    if (input.type === 'text') {
      this.checkText(input, value);
    }
    if (input.type === 'email') {
      this.checkEmail(input, value);
    }
    this.checkAllInput();
  }

  checkText(input: FormInput, val: string): void {
    const value = val.trim();
    this.user.firstName = '';

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
      input.error('Не могут бытьтолько служебные символы');
      return;
    }

    this.user.firstName = value;
    input.success();
  }

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
