const React = require('react');

module.exports = function Like({ card, userId }) {
  let isLiked = false;
  if (card.users) {
    card.users.forEach((user) => {
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
