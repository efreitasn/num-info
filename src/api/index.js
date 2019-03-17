export const getNumberInfo = async (
  number,
  type // year | trivia | math
) => {
  const res = await fetch(`${process.env.REACT_APP_NUMBER_API_ADDRESS || 'http://numbersapi.com'}/${number}/${type}?json`);

  return res.json();
};

export const getNumberInfoAllTypes = number => Promise.all([
  getNumberInfo(number, 'trivia'),
  getNumberInfo(number, 'year'),
  getNumberInfo(number, 'math')
]);