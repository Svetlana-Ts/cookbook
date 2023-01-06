const likes = Array.from(document.querySelectorAll('.js-like'));

likes.forEach((like) => {
  like.addEventListener('click', async (event) => {
    event.preventDefault();

    const url = like.href;
    const heart = like.querySelector('.js-heart');
    const newHeart = heart.cloneNode(true);
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
  });
});
