import Observer from '../Abstract/observer';
import State from '../Model/state';
// import fethWords from '../Model/data-base';
// import { IUserStatistic } from '../Interfaces/common';
import { IUserStatistic } from '../Interfaces/common';
// import { Word } from '../Interfaces/word-model';
import { getDate } from '../Helper/utils';

export default class StatisticService extends Observer {
  private baseUrl = 'https://rs-learn-words.herokuapp.com/';

  userStatisticOld = {};

  chainTrueAnsve = 0;

  arrayIdWordsAnsweTrue: string[] = [];

  arrayIdWordsAnsweFalse: string[] = [];

  userStatisticForServer: IUserStatistic = {
    learnedWords: 0,
    optional: {
      data: '3-9-2022',
      sprint: {
        trueAnsve: 0,
        falseAnsve: 0,
        chain: 0,
        newWords: 0,
      },
      audioCall: {
        trueAnsve: 0,
        falseAnsve: 0,
        chain: 0,
        newWords: 0,
      },
      words: {
        oldWords: [],
      },
    },
  };

  writeStatisticSprint = () => {
    this.dispatch('write-statistic-sprint');
  };

  // получаем сегодня=>дату и если она такая же как и на сервере, обновляем данные на сервере
  checkData = (): boolean => {
    console.log(State.statistics);
    const dataFromServer = State.statistics.optional.data;
    const dataNow = getDate();
    for (let i = 0; i < dataFromServer.length; i += 1) {
      if (dataFromServer[i] !== dataNow[i]) {
        return false; // новый день
      }
    }
    return true; // день тот же
  };

  updateStatistic = () => {
    if (this.checkData()) this.getCountNewWords();
    else this.getCountNewWords();
  };

  getCountNewWords = () => {
    this.userStatisticForServer = { ...State.statistics }; // клонируем себе старую статистику
    const wordSet = new Set(State.statistics.optional.words.oldWords); // делаем из неё сет
    const countwords = wordSet.size; // смотрим размер сета- это количество всех слов пользователя
    // добавляем количество новых слов:
    this.arrayIdWordsAnsweTrue.forEach((idWord) => wordSet.add(idWord)); // в сет + ID правильныx слов
    this.arrayIdWordsAnsweFalse.forEach((idWord) => wordSet.add(idWord)); // в сет + ID неправильныx слов
    const newCountWordsInSet = wordSet.size;
    const countNewWords = newCountWordsInSet - countwords; // количество новых слов
    this.userStatisticForServer.optional.sprint.newWords = countNewWords;
    // обновляем массив индексов всех слов:
    this.userStatisticForServer.optional.words.oldWords = Array.from(wordSet);
    // проверяем длину цепочки и обновляем если надо
    if (this.userStatisticForServer.optional.sprint.chain < this.chainTrueAnsve)
      this.userStatisticForServer.optional.sprint.chain = this.chainTrueAnsve;
    // обновляем количество правильных и неправильных слов
    this.userStatisticForServer.optional.sprint.trueAnsve += this.arrayIdWordsAnsweTrue.length;
    this.userStatisticForServer.optional.sprint.falseAnsve += this.arrayIdWordsAnsweFalse.length;
    // запускаем отрисовку страницы статистики
    this.writeStatisticSprint();
    // отправляем данные на сервер
  };
}
