import { IState } from '../Interfaces/interfaces';

const State: IState = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state') as string)
  : {
      userItem: {
        id: '',
        name: '',
        email: '',
      },
      isAutorise: false,
      userInfoAutorise: {
        message: '',
        token: '',
        refreshToken: '',
        userId: '',
        name: '',
      },
    };

export default State;
