let like = document.querySelector('.card-btn-like');
let icon = document.getElementsByTagName('i');

like.addEventListener( 'click', (event) => {
    event.preventDefault();
    icon.classList.add('like-active') 
});
