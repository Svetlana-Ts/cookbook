// let like = document.querySelector('.card-btn-like');
// let icon = document.getElementsByTagName('i');

// тут ищется только первый элемент, а не все
// пока отключила
// like.addEventListener('click', (event) => {
//   event.preventDefault();
//   icon.classList.add('like-active');
// });

const likes = Array.from(document.querySelectorAll('.js-like'));
let counter = 0;

likes.forEach((like) => {
  like.addEventListener('click', () => {
    if (counter === 0) {
      like.style.color = 'red';
      counter = 1;
    } else {
      like.style.color = '#61916e';
      counter = 0;
    }
  });
});
