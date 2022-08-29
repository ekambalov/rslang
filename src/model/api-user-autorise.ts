import { IUserToken, IUser, IUserID, IUserGetToken } from '../Interfaces/user-model';
import State from './state';

const base = 'https://rs-learn-words.herokuapp.com/';
// const base = 'https://app-learn-words.herokuapp.com/'; from Nikita

export const getUserTokken = async (user: IUserGetToken): Promise<IUserToken | number> => {
  const response: Response = await fetch(`${base}signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (response.status === 200) {
    const content: IUserToken = await response.json();
    State.userInfoAutorise = content;
    State.isAutorise = true;
    localStorage.setItem('userInfoTokken', JSON.stringify(content));
    return content;
  }
  return response.status;
};

export const createUser = async (user: IUser): Promise<IUserID | number> => {
  const response: Response = await fetch(`${base}users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (response.status === 200) {
    const content: IUserID = await response.json();
    localStorage.setItem('userInfo', JSON.stringify(content));
    State.userItem = content;
    return content;
  }
  return response.status;
};
