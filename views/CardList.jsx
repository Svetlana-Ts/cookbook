const React = require('react');
const Card = require('./Card');
const Main = require('./Main');

module.exports = function CardList({ isAuth, cards, userLogin }) {
  return (
    <Main userLogin={userLogin} isAuth={isAuth}>
      <ul>
        <li>
          времени приготовления
          <ul>
            <li>
              <a href="/cards/?order=time&sort=ASC">по возрастанию</a>
            </li>
            <li>
              <a href="/cards/?order=time&sort=DESC">по убыванию</a>
            </li>
          </ul>
        </li>
        <li>
          ингредиентам
          <ul>
            <li>
              <a href="/cards/?order=ingredientsCount&sort=ASC">
                по возрастанию
              </a>
            </li>
            <li>
              <a href="/cards/?order=ingredientsCount&sort=DESC">по убыванию</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        {cards.map((card) => (
          <Card key={card.id} isAuth={isAuth} card={card} />
        ))}
      </ul>
    </Main>
  );
};
