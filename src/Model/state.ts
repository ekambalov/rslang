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
      gamesData: {
        nameGame: '',
        correctAnswers: [],
        wrongAnswers: [],
        series: 0,
      },
      vocabulary: {
        difficultWords: [],
        learningWords: [],
        deletedWords: [],
      },
      words: [],
      currentPage: 0,
      currentLevel: 0,
      statistics: {
        learnedWords: 0,
        optional: {
          date: ' ',
          sprint: {
            corretAnswers: 0,
            wrongAnswers: 0,
            series: 0,
            newWords: 0,
          },
          audioCall: {
            corretAnswers: 0,
            wrongAnswers: 0,
            series: 0,
            newWords: 0,
          },
          words: {
            idOldWords: [],
            idLearnedWordsPerDay: [],
          },
        },
      },
    };

export default State;
