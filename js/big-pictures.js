import {createElementInDOM} from './util.js';

const COMMENT_AVATAR_WIDTH = 35;
const COMMENT_AVATAR_HEIGHT = 35;

const bigPhoto = document.querySelector('.big-picture');
const bigPhotoImg = bigPhoto.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentsCount =  document.querySelector('.comments-count');
const commentsList = document.querySelector('.social__comments');
const photoDescription = document.querySelector('.social__caption');
const socialCommentsCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const closeButton = document.querySelector('.big-picture__cancel');

const getBigPhoto = (photo) => {
  bigPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPhotoImg.src = photo.url;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;

  commentsList.innerHTML = '';
  photo.comments.forEach((comment) => {
    const userComment = createElementInDOM('li', 'social__comment');
    const commentImg = createElementInDOM('img', 'social__picture');
    const commentText = createElementInDOM('p', 'social__text');
    commentImg.src = comment.avatar;
    commentImg.alt = comment.name;
    commentImg.width = COMMENT_AVATAR_WIDTH;
    commentImg.height = COMMENT_AVATAR_HEIGHT;
    userComment.append(commentImg);
    commentText.textContent = comment.message;
    userComment.append(commentText);
    commentsList.append(userComment);
  });
  photoDescription.textContent = photo.description;
  socialCommentsCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
};


closeButton.addEventListener('click', () => {
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
});

body.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPhoto.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

export {getBigPhoto};
