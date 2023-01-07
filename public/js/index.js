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

const fetchCard = async (event, parent) => {
  const title = parent.querySelector('.js-card-title');
  const cardImg = parent.querySelector('.js-card-img');
  if (event.target === title || event.target === cardImg) {
    const url = title.href;
    const response = await fetch(url, { method: 'GET' });
    document.body.innerHTML = await response.text();

    const recipeImg = document.querySelector('.js-recipe-img');
    recipeImg.addEventListener('click', async (event) => {
      event.preventDefault();

      await fetchLikes(event, recipeImg);
    });
  }
};

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', async (event) => {
    event.preventDefault();

    await fetchLikes(event, card);
    await fetchCard(event, card);
  });
});

// const sortBox = document.querySelector('.js-sort');
// const sortBtns = document.querySelectorAll('.js-sort-btn');

// sortBtns.forEach((sortBtn) => {
//   sortBtn.addEventListener('click', async (event) => {
//     event.preventDefault();

//     const cardGroup = document.querySelector('.js-card-group');
//     const url = sortBtn.href;

//     const response = await fetch(url, { method: 'GET' });
//     const html = await response.text();
//     const newCardGroup = html.split('<span class="js-separator"></span>')[1];
//     cardGroup.remove();
//     sortBox.insertAdjacentHTML('afterend', newCardGroup);

//     const cards = document.querySelectorAll('.card');

//     cards.forEach((card) => {
//       card.addEventListener('click', async (event) => {
//         event.preventDefault();

//         await fetchLikes(event, card);

//         await fetchCard(event, card);
//       });
//     });
//   });
// });
