const React = require('react');

module.exports = function Like({ card, userId, color }) {
  let isLiked = false;
  if (card.users) {
    card.users.forEach((user) => {
      if (user.id === userId) {
        isLiked = true;
      } else {
        isLiked = false;
      }
    });
  }

  let heartStyle = isLiked ? { color: 'red' } : { color: '#68ac7a' };

  return <i style={heartStyle} className="fa-solid fa-heart js-heart"></i>;
};
