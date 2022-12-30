const React = require('react');
const Card = require('./Card');
const Main = require('./Main');

module.exports = function CardList({ isAuth, cards, userLogin, baseUrl, offset }) {
  return (
    <Main userLogin={userLogin} isAuth={isAuth}>
      <div id="card-list" className="sort-nav">

        <div>Sort by:</div>

        <div className="sort-list-item">
            Cooking time
            <div className="sort-item">
              <div><a href={`${baseUrl}/?offset=${offset}&order=time&sort=ASC`}><img width="20px" height="20px" src="/img/arrow_up.svg"/></a></div>
              <div><a href={`${baseUrl}/?offset=${offset}&order=time&sort=DESC`}><img width="20px" height="20px" src="/img/arrow_down.svg"/></a></div>
            </div>
        </div>
        
        <div className="sort-list-item">
            ingredients
            <div className="sort-item">
              <div><a href={`${baseUrl}/?offset=${offset}&order=count&sort=ASC`}><img width="20px" height="20px" src="/img/arrow_up.svg"/></a></div>   
              <div><a href={`${baseUrl}/?offset=${offset}&order=count&sort=DESC`}><img width="20px" height="20px" src="/img/arrow_down.svg"/></a></div>
            </div>
        </div>

        <div>
          {(offset === 0) ? ' ' : <a href={`${baseUrl}/?offset=${offset - 8}`}>Previous Page</a>}{'  '}
          {(offset > 280) ? ' ' : <a href={`${baseUrl}/?offset=${offset + 8}`}>Next Page</a>}
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
