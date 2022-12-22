const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Card }) {
      User.Cards = User.belongsToMany(Card, {
        through: 'UsersCards',
        foreignKey: 'userId',
        otherKey: 'cardId',
        as: 'cards',
      });
    }
  }
  User.init(
    {
      login: DataTypes.TEXT,
      password: DataTypes.TEXT,
      email: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'Users',
    },
  );
  return User;
};
