const React = require('react');
const Card = require('./Card');
const Main = require('./Main');

module.exports = function CardList({ isAuth, cards, userLogin, baseUrl, offset }) {
  console.log(Boolean(offset));
  return (
    <Main userLogin={userLogin} isAuth={isAuth}>
      <h3>Сортировка</h3>
      <ul>
        <li>
          Время приготовления
          <ul>
            <li>
              <a href={`${baseUrl}/?offset=${offset}&order=time&sort=ASC`}>по возрастанию</a>
            </li>
            <li>
              <a href={`${baseUrl}/?offset=${offset}&order=time&sort=DESC`}>по убыванию</a>
            </li>
          </ul>
        </li>
        <li>
          Количество ингредиентов
          <ul>
            <li>
              <a href={`${baseUrl}/?offset=${offset}&order=ingredientsCount&sort=ASC`}>
                по возрастанию
              </a>
            </li>
            <li>
              <a href={`${baseUrl}/?offset=${offset}&order=ingredientsCount&sort=DESC`}>
                по убыванию
              </a>
            </li>
          </ul>
        </li>
      </ul>
      {(offset === 0) ? ' ' : <a href={`${baseUrl}/?offset=${offset - 8}`}>Previous Page</a>}{'  '}
      {(offset > 280) ? ' ' : <a href={`${baseUrl}/?offset=${offset + 8}`}>Next Page</a>}
      <ul>
        {cards.map((card) => (
          <Card key={card.id} isAuth={isAuth} card={card} />
        ))}
      </ul>
    </Main>
  );
};
