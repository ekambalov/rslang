import { IState } from '../Interfaces/common';

const State: IState = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state') ?? '')
  : {
      userItem: {
        id: '',
        name: '',
        email: '',
      },
      isAutorise: false,
      deleteUser: '',
      userInfoAutorise: {
        message: '',
        token: '',
        refreshToken: '',
        userId: '',
        name: '',
      },
      textbook: {
        isPlayed: false,
        currentPage: 0,
        currentLevel: 0,
      },
      words: [],
      currentPage: 0,
      currentLevel: 0,
<<<<<<< HEAD
      statistics: {},
=======
>>>>>>> 079411bd768a3acb29fe293621e80e95e681123c
      nameGame: '',
    };

export default State;
