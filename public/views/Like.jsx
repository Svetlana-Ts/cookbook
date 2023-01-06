const React = require('react');

module.exports = function Like({ card, userId }) {
  let isLiked = false;
  console.log(card.users);
  if (card.users) {
    card.users.forEach((user) => {
      console.log('-------------');
      console.log('USER ID FROM CARDS', user.id);
      console.log('USER ID FROM PROPS', userId);
      console.log('-------------');
      if (user.id === userId) {
        isLiked = true;
      }
    });
  }

  return (
    <i
      style={isLiked ? { color: 'red' } : { color: '#68ac7a' }}
      className="fa-solid fa-heart js-heart"
    ></i>
  );
};
