/* eslint-disable prettier/prettier */
import { IUser, IUserGetToken } from '../Interfaces/user-model';
import State from './state';

const base = 'https://rs-learn-words.herokuapp.com/'
// const base = 'https://app-learn-words.herokuapp.com/'; from Nikita

export const getUserTokken = async (user: IUserGetToken): Promise<void> => {
  try {
    const response: Response = await fetch(`${base}signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const content = await response.json();
    if(response.status === 200) {
      State.userInfoAutorise = content;
      State.isAutorise = true;  
      localStorage.setItem('state', JSON.stringify(State));
    }
    console.log(State);
  } catch (e) {
    console.log(e);
  }
};

export const createUser = async (user: IUser): Promise<void> => {
  try {
    const response: Response = await fetch(`${base}users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const content = await response.json();
    State.userItem = content;
    console.log(content);
   
  } catch (e) {
    console.log(e);
  }
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
