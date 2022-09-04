export interface IUser {
  name: string;
  email: string;
  password: string;
}
export interface IUserID {
  name: string;
  email: string;
  id: string;
}
export interface IUserGetToken {
  date: number;
  email: string;
  password: string;
}
export interface IUserToken {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
  date: number;
}
