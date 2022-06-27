import {createSimilarPhotoDescriptions} from './data.js';

const photoListElement = document.querySelector('.pictures');
const template = document.querySelector('#picture').content;
const photoTemplate = template.querySelector('.picture');
const photoListFragment = document.createDocumentFragment();
const photos = createSimilarPhotoDescriptions();

photos.forEach(({url, likes, comments}) => {

  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;

  photoListFragment.append(photoElement);
});

photoListElement.append(photoListFragment);


