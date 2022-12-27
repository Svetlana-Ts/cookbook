const React = require('react');
const Card = require('./Card');
const Main = require('./Main');

module.exports = function CardList({ isAuth, cards, userLogin, baseUrl, offset }) {
  return (
    <Main userLogin={userLogin} isAuth={isAuth}>
      <h3>Сортировка</h3>
      <ul>
        <li>
          Время приготовления
          <ul>
            <li>
              <a href={`${baseUrl}/?order=time&sort=ASC&offset=${offset}`}>по возрастанию</a>
            </li>
            <li>
              <a href={`${baseUrl}/?order=time&sort=DESC&offset=${offset}`}>по убыванию</a>
            </li>
          </ul>
        </li>
        <li>
          Количество ингредиентов
          <ul>
            <li>
              <a href={`${baseUrl}/?order=ingredientsCount&sort=ASC&offset=${offset}`}>
                по возрастанию
              </a>
            </li>
            <li>
              <a href={`${baseUrl}/?order=ingredientsCount&sort=DESC&offset=${offset}`}>
                по убыванию
              </a>
            </li>
          </ul>
        </li>
      </ul>
      {offset && <a href={`${baseUrl}/?offset=${offset - 8}`}>Previous Page</a>}{'  '}
      <a href={`${baseUrl}/?offset=${offset + 8}`}>Next Page</a>
      <ul>
        {cards.map((card) => (
          <Card key={card.id} isAuth={isAuth} card={card} />
        ))}
      </ul>
    </Main>
  );
};
