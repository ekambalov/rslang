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

export const deleteUserServer = async (): Promise<void> => {
  const response: Response = await fetch(`${base}users/${State.userInfoAutorise.userId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${State.userInfoAutorise.token}`,
    },
  });
  const content = await response.json();
  if (response.status === 204) {
    State.isAutorise = false;
    localStorage.removeItem('state');
  }
  console.log(content);
};

/*
Для получения юзера нужно авторизация и вход в платформу 

1. Post запрос на /users
2. Post запрос на /signin
3. От 2 пункта получаешь токен и вставляешь в токен в постмана 
4. Потом уже можешь делать get запрос на users/id

путь сервера/путь картинки

к этому серверу вы конкантируете тот путь который написано в этих картинках data.image


export async function getSettingInput(): Promise<SettingModels[]> {
  const res = await fetch('./settings/setting.json');
  const setting: SettingModels[] = await res.json();
  return setting;
}

export async function getSettingGame(): Promise<SettingGameInterface> {
  const res = await fetch('./settings/settingGame.json');
  const setting: SettingGameInterface = await res.json();
  return setting;
}

export async function getSettingTypeShirt(): Promise<string[]> {
  const res = await fetch('./settings/type-shirt.json');
  const setting: string[] = await res.json();
  return setting;
}

export async function getMenu(): Promise<MenuModels[]> {
  const res = await fetch('./settings/menu.json');
  const menu: MenuModels[] = await res.json();
  return menu;
}

export async function getUsersScore(): Promise<UserModel[]> {
  const res = await fetch('./settings/users-score.json');
  const users: UserModel[] = await res.json();
  return users;
}
*/
