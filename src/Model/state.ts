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
        fromTextbook: false,
      },
      vocabulary: {
        difficultWords: [],
        learningWords: [],
        deletedWords: [],
      },
      words: [],
      currentPage: 0,
      currentLevel: 0,
      statistics: {},
      nameGame: '',
    };

export default State;
