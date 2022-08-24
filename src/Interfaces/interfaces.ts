import { IUserID, IUserToken } from './user-model';

export interface ILinkProps {
  content: string;
  path: string;
}
export interface ILinkButtonProps {
  content: string;
  clas: string;
  path: string;
}
export interface ILinkGitHub {
  src: string;
  imgWhite: string;
  imgBlack: string;
}
export interface IOptionsInput {
  title: string;
  type: string;
  id: string;
  name: string;
}
export interface ICallback {
  (): void;
}
export interface IState {
  userItem: IUserID;
  isAutorise: boolean;
  userInfoAutorise: IUserToken;
}
