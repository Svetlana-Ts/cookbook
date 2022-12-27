const React = require('react');
const Card = require('./Card');
const Main = require('./Main');

module.exports = function CardList({ isAuth, cards, userLogin, baseUrl }) {
  return (
    <Main userLogin={userLogin} isAuth={isAuth}>
      <div className="sort-nav">
        <div id="card-list">Сортировка по:</div>
        <div className="sort-list">

          <div className="sort-list-item">
            времени приготовления
            <div className="sort-item">
              <div><a href={`${baseUrl}/?order=time&sort=ASC`}>по возрастанию</a></div>
              <div><a href={`${baseUrl}/?order=time&sort=DESC`}>по убыванию</a></div>
            </div>
          </div>
  
          <div className="sort-list-item">
            ингредиентам
            <div className="sort-item">
              <div><a href={`${baseUrl}/?order=ingredientsCount&sort=ASC`}>по возрастанию</a></div>   
              <div><a href={`${baseUrl}/?order=ingredientsCount&sort=DESC`}>по убыванию</a></div>
            </div>
          </div>
  
        </div>
    </div>

      <ul>
        {cards.map((card) => (
          <Card key={card.id} isAuth={isAuth} card={card} />
        ))}
      </ul>
    </Main>
  );
};
