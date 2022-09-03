import Observer from '../Abstract/observer';
// import State from '../Model/state';
// import fethWords from '../Model/data-base';
// import { IUserStatistic } from '../Interfaces/common';

export default class StatisticService extends Observer {
  private baseUrl = 'https://rs-learn-words.herokuapp.com/';

  userStatisticOld = {};
}
