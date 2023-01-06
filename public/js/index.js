const likes = Array.from(document.querySelectorAll('.js-like'));

likes.forEach((like) => {
  like.addEventListener('click', async (event) => {
    event.preventDefault();

    const url = like.href;
    const heart = like.querySelector('.js-heart');

    const response = await fetch(url, {
      method: 'GET',
    });

    like.innerHTML = await response.text();
  });
});
