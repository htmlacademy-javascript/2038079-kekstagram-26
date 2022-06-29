import {createSimilarPhotoDescriptions} from './data.js';
import {getBigPhoto} from './big-pictures.js';

const photoContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content;
const photoTemplateInner = photoTemplate.querySelector('.picture');
const photoListFragment = document.createDocumentFragment();
const photos = createSimilarPhotoDescriptions();

const getSmallPictures = () => {
  photos.forEach((photo) => {

    const photoElement = photoTemplateInner.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
    photoListFragment.append(photoElement);

    photoElement.addEventListener('click', () => {
      getBigPhoto(photo);
    });

    photoContainer.append(photoListFragment);
  });};

getSmallPictures();
