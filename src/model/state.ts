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
      // currentArrayWordsGame: [],
      currentPageGame: 0,
      currentLevelGame: 0,
    };

export default State;
