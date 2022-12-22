const React = require('react');

module.exports = function Menu({ isAuth }) {
  if (isAuth) {
    return (
      <ul>
        <li>
          <a href="/favourites">Избранное</a>
        </li>
        <li>
          <a href="/auth/logout">Выход</a>
        </li>
      </ul>
    );
  }
  return (
    <ul>
      <li>
        <a href="/auth/login">Вход</a>
      </li>
      <li>
        <a href="/auth/register">Регистрация</a>
      </li>
      {/* проверка */}
      <li>
        <a href="/recipe">Карточка Рецепта</a>
      </li>
    </ul>
  );
};
