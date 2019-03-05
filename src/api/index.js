export const getNumberInfo = (
  number,
  type, // year || trivia || math
) => {
  const defaultMessage = `No ${type === 'trivia' ? 'trivia' : `${type} info`} about this number :(`;

  return fetch(`http://numbersapi.com/${number}/${type}?default=${defaultMessage}&json`)
    .then(res => res.json())
};

export const getNumberInfoAllTypes = number => {
  return Promise.all([
    getNumberInfo(number, 'trivia'),
    getNumberInfo(number, 'year'),
    getNumberInfo(number, 'math')
  ]);
};