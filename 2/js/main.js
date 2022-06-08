function getRandomInteger (min, max) {
  if (min > max) {
    return new Error('Начальное значение диапазона больше конечного');
  }
  const integerMin = Math.ceil(min);
  const integerMax = Math.floor(max);
  return Math.floor(integerMin + Math.random() * (integerMax - integerMin + 1));
}

function isValidStringLength (str, maxLength) {
  return str.length <= maxLength;
}


getRandomInteger(2,1);
isValidStringLength('hello', 6);
