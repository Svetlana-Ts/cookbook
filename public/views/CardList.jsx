const React = require('react');
const Card = require('./Card');
const Main = require('./Main');

module.exports = function CardList({ isAuth, cards, userLogin, baseUrl }) {
  return (
    <Main userLogin={userLogin} isAuth={isAuth}>
      <div id="card-list" className="sort-nav">

        <div>Sort by:</div>

        <div className="sort-list-item">
            Cooking time
            <div className="sort-item">
              <div><a href={`${baseUrl}/?order=time&sort=ASC`}><img width="20px" height="20px" src="/img/arrow_up.svg"/></a></div>
              <div><a href={`${baseUrl}/?order=time&sort=DESC`}><img width="20px" height="20px" src="/img/arrow_down.svg"/></a></div>
            </div>
        </div>
        
        <div className="sort-list-item">
            ingredients
            <div className="sort-item">
              <div><a href={`${baseUrl}/?order=ingredientsCount&sort=ASC`}><img width="20px" height="20px" src="/img/arrow_up.svg"/></a></div>   
              <div><a href={`${baseUrl}/?order=ingredientsCount&sort=DESC`}><img width="20px" height="20px" src="/img/arrow_down.svg"/></a></div>
            </div>
        </div>

      </div>

      <ul className="card-group">
        {cards.map((card) => (
          <Card key={card.id} isAuth={isAuth} card={card} />
        ))}
      </ul>
    </Main>
  );
};
