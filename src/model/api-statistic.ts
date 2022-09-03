/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */
import { IUserStatistic } from '../Interfaces/common';
import State from './state';
// import { getDate } from '../Helper/utils';

const base = 'https://rs-learn-words.herokuapp.com/';

// const dateNow = getDate();

export const userStatisticFirst: IUserStatistic = {
  "learnedWords": 0,
  "optional": {
    "data": '0309',
    "sprint": {
      "trueAnsve": 0,
      "falseAnsve": 0,
      "chain": 0,
      "newWords": []
    },
    "audioCall": {
      "trueAnsve": 0,
      "falseAnsve": 0,
      "chain": 0,
      "newWords": []
    },
    "words": {
      "oldWords": []
    }
  }
};

/* const swaggerStstistic = {
  "learnedWords": 0,
  "optional": {}
};
*/

interface IswaggerStstistic  {
  "learnedWords": number,
  "optional": unknown,
}

export const setUserStatistic = async (userId: string, userToken: string, userStatistic: IUserStatistic | IswaggerStstistic) => {
  
  const response: Response = await fetch(`${base}users/${userId}/statistics`, {
     method: 'PUT',
     headers: {
      'Authorization': `Bearer ${userToken}`,
      'Accept': 'application/json',
     },
    body: JSON.stringify(userStatistic),
    });
    const content = await response.json();
    console.log(content);
    return content;
 };

export const getUserStatistic = async (userId: string, userToken: string) => { 
 
    const response: Response = await fetch(`${base}users/${userId}/statistics`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'Accept': 'application/json',  
      },
    });
    if (response.status === 404) {
      State.statistics = userStatisticFirst;
      setUserStatistic(userId, userToken, userStatisticFirst); 
      return
    }
    const content = await response.json();
    if (response.status === 200) {
      State.statistics = content;
      console.log(content, 'ctatistic')
    }
    
 
};


