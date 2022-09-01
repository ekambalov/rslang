import { Word } from '../Interfaces/word-model';
import State from './state';

const BASE_URL = 'https://rs-learn-words.herokuapp.com';

export default async (group: number, page: number): Promise<Word[]> => {
  const response = await fetch(`${BASE_URL}/words/?group=${group}&page=${page}`);
  const words: Word[] = await response.json();
  State.words = [...words];
  State.currentLevelGame = group;
  State.currentPageGame = page;
  localStorage.setItem('state', JSON.stringify(State));
  return words;
};
