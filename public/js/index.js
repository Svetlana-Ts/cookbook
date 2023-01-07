const fetchLikes = async (event, parent) => {
  const heart = parent.querySelector('.js-heart');
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
      parent.remove();
    }
  }
};

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', async (event) => {
    event.preventDefault();

    //-----LIKES-----
    await fetchLikes(event, card);
    // const heart = card.querySelector('.js-heart');
    // if (event.target === heart) {
    //   const logout = document.querySelector('.js-logout');
    //   const newHeart = heart.cloneNode(true);
    //   const like = heart.closest('.js-like');
    //   const url = like.href;

    //   if (newHeart.style.color === 'red') {
    //     newHeart.style.color = '#68ac7a';
    //   } else {
    //     newHeart.style.color = 'red';
    //   }

    //   await fetch(url, {
    //     method: 'GET',
    //   });

    //   heart.remove();
    //   like.appendChild(newHeart);
    //   if (logout) {
    //     card.remove();
    //   }
    // }
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

        await fetchLikes(event, recipeImg);
        // const recipeHeart = recipeImg.querySelector('.js-heart');
        // if (event.target === recipeHeart) {
        //   const newRecipeHeart = recipeHeart.cloneNode(true);
        //   const recipeLike = recipeHeart.closest('.js-like');
        //   const url = recipeLike.href;

        //   if (newRecipeHeart.style.color === 'red') {
        //     newRecipeHeart.style.color = '#68ac7a';
        //   } else {
        //     newRecipeHeart.style.color = 'red';
        //   }

        //   await fetch(url, {
        //     method: 'GET',
        //   });

        //   recipeHeart.remove();
        //   recipeLike.appendChild(newRecipeHeart);
        // }
      });
    }
    //-----CARD-----
  });
});

const sortBox = document.querySelector('.js-sort');
const sortBtns = document.querySelectorAll('.js-sort-btn');

sortBtns.forEach((sortBtn) => {
  sortBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const cardGroup = document.querySelector('.js-card-group');
    const url = sortBtn.href;

    const response = await fetch(url, { method: 'GET' });
    const html = await response.text();
    const newCardGroup = html.split('<span class="js-separator"></span>')[1];
    cardGroup.remove();
    sortBox.insertAdjacentHTML('afterend', newCardGroup);

    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
      card.addEventListener('click', async (event) => {
        event.preventDefault();

        //-----LIKES-----
        await fetchLikes(event, card);
        // const heart = card.querySelector('.js-heart');
        // if (event.target === heart) {
        //   const logout = document.querySelector('.js-logout');
        //   const newHeart = heart.cloneNode(true);
        //   const like = heart.closest('.js-like');
        //   const url = like.href;

        //   if (newHeart.style.color === 'red') {
        //     newHeart.style.color = '#68ac7a';
        //   } else {
        //     newHeart.style.color = 'red';
        //   }

        //   await fetch(url, {
        //     method: 'GET',
        //   });

        //   heart.remove();
        //   like.appendChild(newHeart);
        //   if (logout) {
        //     card.remove();
        //   }
        // }
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
  });
});
