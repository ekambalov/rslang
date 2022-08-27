import { Word } from '../Interfaces/word-model';

const BASE_URL = 'https://rs-learn-words.herokuapp.com';

export default async (group: number, page: number): Promise<Word[]> => {
  const response = await fetch(`${BASE_URL}/words/?group=${group}&page=${page}`);
  const words = await response.json();
  return words;
};
