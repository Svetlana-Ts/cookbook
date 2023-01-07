const main = document.querySelector('.main');
const container = document.querySelector('.card-container');

// работает, но надо делать фетчи вообще на все кнопки
// document.body.addEventListener('click', async (event) => {
//   event.preventDefault();

//   //-----HOME-----
//   const logoImg = document.querySelector('.js-logo-img');
//   if (event.target === logoImg) {
//     const response = await fetch('/', { method: 'GET' });
//     document.body.innerHTML = await response.text();
//   }
//   //--------------

//   //-----SORT-----
//   const carets = document.querySelectorAll('.fa-solid');
//   carets.forEach(async (caret) => {
//     if (event.target === caret) {
//       const btn = caret.closest('.js-sort-btn');
//       const url = btn.href;
//       const response = await fetch(url, { method: 'GET' });
//       document.body.innerHTML = await response.text();
//     }
//   });
//   //--------------

//   //-----LIKES-----
//   const hearts = document.querySelectorAll('.js-heart');
//   hearts.forEach(async (heart) => {
//     if (event.target === heart) {
//       const newHeart = heart.cloneNode(true);
//       const like = heart.closest('.js-like');
//       const url = like.href;

//       if (newHeart.style.color === 'red') {
//         newHeart.style.color = '#68ac7a';
//       } else {
//         newHeart.style.color = 'red';
//       }

//       await fetch(url, {
//         method: 'GET',
//       });

//       heart.remove();
//       like.appendChild(newHeart);
//     }
//   });
//   //---------------
// });

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', async (event) => {
    event.preventDefault();

    //-----LIKES-----
    const heart = card.querySelector('.js-heart');
    if (event.target === heart) {
      const logout = document.querySelector('.js-logout');
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
      if (logout) {
        card.remove();
      }
    }
    //-----LIKES-----

    //-----CARD-----
    const title = card.querySelector('.js-card-title');
    const cardImg = card.querySelector('.js-card-img');
    if (event.target === title || event.target === cardImg) {
      const url = title.href;
      const response = await fetch(url, { method: 'GET' });
      document.body.innerHTML = await response.text();

      const recipeImg = document.querySelector('.js-recipe-img');
      recipeImg.addEventListener('click', async (event) => {
        event.preventDefault();

        const recipeHeart = recipeImg.querySelector('.js-heart');
        if (event.target === recipeHeart) {
          const newRecipeHeart = recipeHeart.cloneNode(true);
          const recipeLike = recipeHeart.closest('.js-like');
          const url = recipeLike.href;

          if (newRecipeHeart.style.color === 'red') {
            newRecipeHeart.style.color = '#68ac7a';
          } else {
            newRecipeHeart.style.color = 'red';
          }

          await fetch(url, {
            method: 'GET',
          });

          recipeHeart.remove();
          recipeLike.appendChild(newRecipeHeart);
        }
      });
    }
    //-----CARD-----
  });
});
