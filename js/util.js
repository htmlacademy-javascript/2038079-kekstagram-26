// функция нигде не используется
// const isValidStringLength = (str, maxLength) => str.length <= maxLength;

const getRandomIntegerFromRange = (min, max) => {
  if (min > max) {
    return new Error('Начальное значение диапазона больше конечного');
  }
  const integerMin = Math.ceil(min);
  const integerMax = Math.floor(max);
  return Math.floor(integerMin + Math.random() * (integerMax - integerMin + 1));
};

const getRandomArrayElement = (elements) => elements[getRandomIntegerFromRange(0, elements.length - 1)];

const getRandomIntegerNumber0to1000 = () => Math.floor(Math.random() * 1000);

export {getRandomIntegerFromRange, getRandomArrayElement, getRandomIntegerNumber0to1000};
