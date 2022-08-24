import { IState } from '../Interfaces/interfaces';

const State: IState = {
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
