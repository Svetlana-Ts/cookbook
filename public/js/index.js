//-----ОТРИСОВКА ЛАЙКОВ-----
// const likes = Array.from(document.querySelectorAll('.js-like'));

// likes.forEach((like) => {
//   like.addEventListener('click', async (event) => {
//     event.preventDefault();

//     const url = like.href;
//     const heart = like.querySelector('.js-heart');
//     const newHeart = heart.cloneNode(true);

//     if (newHeart.style.color === 'red') {
//       newHeart.style.color = '#68ac7a';
//     } else {
//       newHeart.style.color = 'red';
//     }

//     await fetch(url, {
//       method: 'GET',
//     });

//     heart.remove();
//     like.appendChild(newHeart);
//   });
// });
//--------------------------------

document.body.addEventListener('click', (event) => {
  event.preventDefault();

  const carets = document.querySelectorAll('.fa-solid');
  carets.forEach(async (caret) => {
    if (event.target === caret) {
      const btn = caret.closest('.js-sort-btn');
      const url = btn.href;
      const response = await fetch(url, { method: 'GET' });
      document.body.innerHTML = await response.text();
    }
  });

  const hearts = document.querySelectorAll('.js-heart');
  hearts.forEach(async (heart) => {
    if (event.target === heart) {
      const newHeart = heart.cloneNode(true);
      const like = heart.closest('.js-like');
      const url = like.href;

      if (newHeart.style.color === 'red') {
        newHeart.style.color = '#68ac7a';
      } else {
        newHeart.style.color = 'red';
      }

      await fetch(url, {
        method: 'GET',
      });

      heart.remove();
      like.appendChild(newHeart);
    }
  });
});
