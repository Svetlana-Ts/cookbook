const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User }) {
      Card.Users = Card.belongsToMany(User, {
        through: 'UsersCards',
        foreignKey: 'cardId',
        otherKey: 'userId',
        as: 'users',
      });
    }
  }
  Card.init(
    {
      photo: DataTypes.TEXT,
      title: DataTypes.TEXT,
      instruction: DataTypes.TEXT,
      ingredients: DataTypes.TEXT,
      time: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Card',
      tableName: 'Cards',
    },
  );
  return Card;
};
