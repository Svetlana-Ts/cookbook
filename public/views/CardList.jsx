const React = require('react');
const Card = require('./Card');
const Main = require('./Main');

module.exports = function CardList({
  isAuth,
  cards,
  userLogin,
  baseUrl,
  offset,
  userId,
  colName,
  sortBy,
  maxCount,
}) {
  return (
    <Main userLogin={userLogin} isAuth={isAuth} baseUrl={baseUrl}>
      <div id="card-list" className="sort-nav js-sort">
        <div className="sort-by">Sort by:</div>

        <div className="sort-list-item">
          Cooking time
          <div className="sort-item">
            <div>
              <a
                className="js-sort-btn"
                href={`${baseUrl}/?offset=${offset}&order=time&sort=ASC`}
              >
                <i className="fa-sharp fa-solid fa-caret-up"></i>
              </a>
            </div>
            <div>
              <a
                className="js-sort-btn"
                href={`${baseUrl}/?offset=${offset}&order=time&sort=DESC`}
              >
                <i className="fa-solid fa-caret-down"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="sort-list-item">
          Ingredients
          <div className="sort-item">
            <div>
              <a
                className="js-sort-btn"
                href={`${baseUrl}/?offset=${offset}&order=count&sort=ASC`}
              >
                <i class="fa-sharp fa-solid fa-caret-up"></i>
              </a>
            </div>
            <div>
              <a
                className="js-sort-btn"
                href={`${baseUrl}/?offset=${offset}&order=count&sort=DESC`}
              >
                <i class="fa-solid fa-caret-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <ul className="card-group">
        {cards.map((card) => (
          <Card key={card.id} isAuth={isAuth} card={card} userId={userId} />
        ))}
      </ul>

      {baseUrl === '/cards' ? (
        <div className="pages">
          {offset === 0 ? (
            ' '
          ) : (
            <a
              href={`${baseUrl}/?offset=${
                offset - 8
              }&order=${colName}&sort=${sortBy}`}
            >
              Previous Page
            </a>
          )}
          {'  '}
          {offset > maxCount - 9 ? (
            ' '
          ) : (
            <a
              href={`${baseUrl}/?offset=${
                offset + 8
              }&order=${colName}&sort=${sortBy}`}
            >
              Next Page
            </a>
          )}
        </div>
      ) : (
        ''
      )}
    </Main>
  );
};
