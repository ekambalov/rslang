import { IUserToken, IUser, IUserID, IUserGetToken } from '../Interfaces/user-model';
import State from './state';

const base = 'https://rs-learn-words.herokuapp.com/';
// const base = 'https://app-learn-words.herokuapp.com/'; from Nikita

export const getTokkenData = async (user: IUserGetToken): Promise<IUserToken | number> => {
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
    State.userInfoAutorise.date = Date.now();
    State.isAutorise = true;
    localStorage.setItem('userInfoTokken', JSON.stringify(State.userInfoAutorise));
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

export const getRefrechTokkenData = async (id: string, refreshToken: string): Promise<IUserToken | number> => {
  const response: Response = await fetch(`${base}users/${id}/tokens`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${refreshToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 200) {
    const content: IUserToken = await response.json();
    State.userInfoAutorise = content;
    State.userInfoAutorise.date = Date.now();
    State.isAutorise = true;
    localStorage.setItem('userInfoTokken', JSON.stringify(State.userInfoAutorise));
    return content;
  }
  return response.status;
};

export async function getUserTokken(user: IUserGetToken) {
  let tokenData: IUserToken; // объявляем локальную переменную tokenData
  if (localStorage.getItem('userInfoTokken')) {
    tokenData = JSON.parse(localStorage.getItem('userInfoTokken') as string);
    if (Date.now() >= tokenData.date + 60 * 60 * 1000 * 4) {
      getRefrechTokkenData(tokenData.userId, tokenData.refreshToken);
    } else {
      return;
    }
  }
  getTokkenData(user); // возвращаем изначальную функцию, но уже с валидным токеном в headers
}
