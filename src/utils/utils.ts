export default function getRandomInteger(first: number, second: number) {
  const min = Math.ceil(first < second ? first : second);
  const max = Math.floor(second > first ? second : first);
  return Math.floor(Math.random() * (max - min)) + min;
}
