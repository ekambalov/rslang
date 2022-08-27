export interface ILinkProps {
  content: string;
  path: string;
  game?: string;
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
export interface IWord {
  id: string;
  group: 0;
  page: 0;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}
