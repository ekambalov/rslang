import { IWord } from '../Interfaces/interfaces';

const BASE_URL = 'https://rs-learn-words.herokuapp.com';

export const getWords = async (group: number, page: number): Promise<IWord[]> => {
  const response = await fetch(`${BASE_URL}/words/?group=${group}&page=${page}`);
  const words = await response.json();
  return words;
};

export const setAmountWords = (amount: number) => {
  const amountWords = amount;
};
