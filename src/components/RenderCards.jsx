import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useRecipesContext } from '../context/Provider';

export default function RenderCards({ func, type, typeCards }) {
  const [cards, setCards] = useState({ cards: [], loading: true });

  useEffect(() => {
    function requestApi() {
      func()
        .then((request) => {
          setCards({ ...cards, cards: request, loading: false });
        });
    }
    requestApi();
    return function cleanUp() {
    };
  }, []);

  const { filterCategory } = useRecipesContext();

  const history = useHistory();
  function renderCardsByCategories(card, index) {
    const MAX_CARDS = 12;
    if (index >= MAX_CARDS) return '';
    const { pathname } = history.location;
    console.log(pathname);
    return (
      <Link to={ `${pathname}/${card[`id${type}`]}` }>
        <div
          key={ card[`id${type}`] }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            src={ card[`str${type}Thumb`] }
            alt={ card[`str${type}`] }
            data-testid={ `${index}-card-img` }
            width="100px"
          />
          <h3 data-testid={ `${index}-card-name` }>
            {card[`str${type}`]}
          </h3>
        </div>
      </Link>
    );
  }

  if (filterCategory.categorySelected) {
    console.log(filterCategory.categoriesFilter);
    return (
      filterCategory.loading ? <h1>Loading</h1>
        : (
          <>
            {filterCategory.categoriesFilter
              .map((card, index) => renderCardsByCategories(card, index))}
          </>
        )
    );
  }

  return (
    cards.loading ? <h1>Loading</h1>
      : (
        <>
          {cards.cards[typeCards]
            .map((card, index) => renderCardsByCategories(card, index))}
        </>
      )
  );
}

RenderCards.propTypes = {
  func: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  typeCards: PropTypes.string.isRequired,
};
