import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import recipesContext from '../context/recipesContext';

export default function RenderCardSearch({ cards, type }) {
  const MAX_CARDS = 12;
  const { recipesApp } = useContext(recipesContext);
  return (
    recipesApp.loading ? <h1>Loading</h1>
      : (
        <>
          {cards.map((card, index) => {
            if (index >= MAX_CARDS) return '';
            return (
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
            );
          })}
        </>
      )
  );
}

RenderCardSearch.propTypes = {
  cards: PropTypes.arrayOf().isRequired,
  type: PropTypes.string.isRequired,
};
