import Observer from '../Abstract/observer';
import State from '../Model/state';
import defaultStats from '../Settings/default-statistics.json';
import { IGameStats, IStorageStats, IUserStatistic } from '../Interfaces/common';
import { getDate } from '../Helper/utils';
import { getStatistics, setStatistics } from '../Model/api-statistic';
import { Word } from '../Interfaces/word-model';

export default class StatisticService extends Observer {
  private userId = '';

  private token = '';

  private stats?: IUserStatistic;

  getStats = async (): Promise<IUserStatistic> => {
    const isNewDate = await this.checkDate();
    if (isNewDate && this.stats) {
      const resetStats = this.getResetStats(this.stats);
      return resetStats;
    }
    const stats = await getStatistics(this.userId, this.token);
    return stats;
  };

  updateStats = async () => {
    if (!State.isAutorise) return;
    const isNewDate = await this.checkDate();
    if (isNewDate && this.stats) {
      const resetStats = this.getResetStats(this.stats);
      const updatedStats = this.getUpdatedStats(resetStats);
      await setStatistics(this.userId, this.token, updatedStats);
    } else if (this.stats) {
      const updatedStats = this.getUpdatedStats(this.stats);
      await setStatistics(this.userId, this.token, updatedStats);
    }
  };

  checkDate = async () => {
    this.setAuthorizationData();
    const currentDate = getDate();
    this.stats = await getStatistics(this.userId, this.token);
    const { date } = this.stats.optional;
    if (date !== currentDate) {
      return true;
    }
    return false;
  };

  setAuthorizationData = () => {
    this.userId = State.userInfoAutorise.userId;
    this.token = State.userInfoAutorise.token;
  };

  getResetStats = (stats: IUserStatistic): IUserStatistic => {
    const resetStats = <IUserStatistic>defaultStats;
    const { oldWords, learnedWords } = resetStats.optional.storage;
    const currentDate = getDate();
    resetStats.optional.date = currentDate;
    oldWords.concat(stats.optional.storage.oldWords);
    learnedWords.concat(stats.optional.storage.learnedWords);
    return resetStats;
  };

  getUpdatedStats = (stats: IUserStatistic): IUserStatistic => {
    const { nameGame } = State.gamesData;
    const updatedStats = stats;
    const gameStats = this.getUpdateGameStats(stats);
    const storageStats = this.getUpdatedStatsStorage(stats);
    updatedStats.optional[nameGame] = gameStats;
    updatedStats.optional.storage = storageStats;
    return updatedStats;
  };

  getUpdatedStatsStorage = (stats: IUserStatistic): IStorageStats => {
    const storageStats = stats.optional.storage;
    const newWords = this.getIdNewWords(stats);
    storageStats.oldWords.push(...newWords);
    return storageStats;
  };

  getUpdateGameStats = (stats: IUserStatistic): IGameStats => {
    const { nameGame, correctAnswers, wrongAnswers, series } = State.gamesData;
    const percent = this.getPercentCorrectAnswers(stats);
    const newWords = this.getIdNewWords(stats);
    const gameStats: IGameStats = stats.optional[nameGame];
    gameStats.correct += correctAnswers.length;
    console.log(gameStats.wrong, stats.optional.audioCall.wrong);
    gameStats.wrong += wrongAnswers.length;
    gameStats.series = series > gameStats.series ? series : gameStats.series;
    gameStats.percent = percent;
    gameStats.newWords += newWords.length;
    return gameStats;
  };

  getIdNewWords = (stats: IUserStatistic): string[] => {
    const idNewWords: string[] = [];
    const idOldWords = new Set(stats.optional.storage.oldWords);
    const words: Word[] = [...State.gamesData.wrongAnswers, ...State.gamesData.correctAnswers];
    words.forEach((item) => {
      if (!idOldWords.has(item.id)) {
        idNewWords.push(item.id);
      }
    });
    return idNewWords;
  };

  getPercentCorrectAnswers = (stats: IUserStatistic): number => {
    const { correctAnswers, wrongAnswers, nameGame } = State.gamesData;
    const correctAnswersPerDay = stats.optional[nameGame].correct + correctAnswers.length;
    const wrongAnswersPerDay = stats.optional[nameGame].wrong + wrongAnswers.length;
    const result = Math.round((100 / (correctAnswersPerDay + wrongAnswersPerDay)) * correctAnswersPerDay);
    return result;
  };
}
