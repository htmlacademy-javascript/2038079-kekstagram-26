import {getRandomIntegerNumber0to1000, getRandomIntegerFromRange,getRandomArrayElement} from './util.js';

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

const createUniqCommentIdGenerator = () => {
  const usedCommentIds = [];
  return () => {
    let commentId = getRandomIntegerNumber0to1000();
    while (usedCommentIds.includes(commentId)) {
      commentId = getRandomIntegerNumber0to1000();
    }
    usedCommentIds.push(commentId);
    return commentId;
  };
};

const getCommentId = createUniqCommentIdGenerator();

const getComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomIntegerFromRange(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPhotoInfoGenerator = () => {
  let photoId = 0;
  return () => {
    photoId++;
    return {
      id: photoId,
      url: `photos/${photoId}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomIntegerFromRange(15, 200),
      comments: Array.from( {length: getRandomIntegerFromRange(1,5)}, getComment)
    };
  };
};

const getPhotoInfo = createPhotoInfoGenerator();

const createSimilarPhotoDescriptions = () => Array.from({length: SIMILAR_PHOTO_DESCRIPTION_COUNT}, getPhotoInfo);

export {createSimilarPhotoDescriptions};

