export const baseUrl = 'https://rs-learn-words.herokuapp.com/';

export const getWords = (page = 0, group = 0): Promise<Response> => {
  let pageValidate = page;
  let groupValidate = group;

  if (Number.isNaN(group)) {
    groupValidate = 0;
  }
  if (Number.isNaN(page)) {
    pageValidate = 0;
  }

  const response = fetch(`${baseUrl}words?page=${pageValidate}&group=${groupValidate}`);
  return response;
};

export const getWord = (page = 0, group = 0) => {
  let pageValidate = page;
  let groupValidate = group;

  console.log('test1');
  if (Number.isNaN(group)) {
    groupValidate = 0;
    console.log('test2');
  }
  if (Number.isNaN(page)) {
    pageValidate = 0;
  }

  const response = fetch(`${baseUrl}words?page=${pageValidate}&group=${groupValidate}`);
  return response;
};
