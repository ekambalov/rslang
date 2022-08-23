const baseUrl = 'https://rs-learn-words.herokuapp.com/';

export const getWords = (page = 0, group = 0): Promise<Response> => {
  const response = fetch(`${baseUrl}words?page=${page}&group=${group}`);
  return response;
};
export const getWord = (page = 0, group = 0) => {
  const response = fetch(`${baseUrl}words?page=${page}&group=${group}`);
  return response;
};
