import { cardType } from 'src/custom-types/content-types';

export const swapArr = (
  arr: cardType[],
  indexStart: number,
  indexEnd: number
) => {
  const removedItem = arr.splice(indexStart, 1, arr[indexEnd])[0];
  arr.splice(indexEnd, 1, removedItem);
};

export const shuffleCards = (arr: cardType[]) => {
  const nArr = [...arr];
  const l = nArr.length;

  for (let i = 1; i < 150; i++) {
    const indexStart = Math.round(Math.random() * (l - 1));
    const indexEnd = Math.round(Math.random() * (l - 1));
    if (indexStart !== indexEnd) swapArr(nArr, indexStart, indexEnd);
  }
  return nArr;
};
