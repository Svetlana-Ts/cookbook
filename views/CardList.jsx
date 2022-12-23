const React = require('react');
const Card = require('./Card');
const Main = require('./Main');

module.exports = function CardList({ isAuth, cards, userLogin, baseUrl }) {
  return (
    <Main userLogin={userLogin} isAuth={isAuth}>
      <h5>Сортировка по</h5>
      <ul>
        <li>
          времени приготовления
          <ul>
            <li>
              <a href={`${baseUrl}/?order=time&sort=ASC`}>по возрастанию</a>
            </li>
            <li>
              <a href={`${baseUrl}/?order=time&sort=DESC`}>по убыванию</a>
            </li>
          </ul>
        </li>
        <li>
          ингредиентам
          <ul>
            <li>
              <a href={`${baseUrl}/?order=ingredientsCount&sort=ASC`}>
                по возрастанию
              </a>
            </li>
            <li>
              <a href={`${baseUrl}/?order=ingredientsCount&sort=DESC`}>
                по убыванию
              </a>
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
