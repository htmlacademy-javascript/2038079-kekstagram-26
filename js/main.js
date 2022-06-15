// функция не используется в этой задаче
// const isValidStringLength = (str, maxLength) => str.length <= maxLength;

const DESCRIPTIONS = [
  'Первое описание',
  'Второе описание',
  'Третье описание',
  'Четвертое описание',
  'Пятое описание',
  'Шестое описание',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Ярослав',
  'Ульяна',
  'Виктор',
  'Ксения',
  'Кирилл',
  'Григорий',
];

const SIMILAR_PHOTO_DESCRIPTION_COUNT = 25;
const usedCommentId = [];
let photoId = 0;

const getRandomInteger = (min, max) => {
  if (min > max) {
    return new Error('Начальное значение диапазона больше конечного');
  }
  const integerMin = Math.ceil(min);
  const integerMax = Math.floor(max);
  return Math.floor(integerMin + Math.random() * (integerMax - integerMin + 1));
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomCommentId = () => Math.floor(Math.random() * 1000);

const getUniqCommentId = () => {
  const commentId = getRandomCommentId();
  if (usedCommentId.includes(commentId)) {
    return  getUniqCommentId();
  } else {
    usedCommentId.push(commentId);
    return commentId;
  }
};

const getComment = () => ({
  id: getUniqCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const getPhotoInfo = () => {
  photoId++;
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from( {length: getRandomInteger(1,5)}, getComment)
  };
};

// eslint-disable-next-line no-unused-vars
const similarPhotoDescriptions = Array.from({length: SIMILAR_PHOTO_DESCRIPTION_COUNT}, getPhotoInfo);
