import React, { useState } from 'react';
import PropTypes from 'prop-types';

import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

export default function FavoriteButton({ cardFavorite, type }) {
  const [favorited, setFavorited] = useState(false);

  const imageSource = favorited ? blackHeartIcon : whiteHeartIcon;

  function handleClick() {
    setFavorited(!favorited);
    if (!localStorage.favoriteRecipes) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    const localStorageFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const object = {
      id: cardFavorite[`id${type}`],
      type: type === 'Meal' ? 'comida' : 'bebida',
      area: cardFavorite.strArea || '',
      category: cardFavorite.strCategory,
      alcoholicOrNot: cardFavorite.strAlcoholic || '',
      name: cardFavorite[`str${type}`],
      image: cardFavorite[`str${type}Thumb`],
    };
    const newLocalStorage = [...localStorageFavorite, object];
    localStorage.setItem('favoriteRecipes', JSON.stringify(newLocalStorage));
  }

  return (
    <div>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ handleClick }
        src={ imageSource }
      >
        <img src={ imageSource } alt="Botão de favorito" />
      </button>
    </div>
  );
}

FavoriteButton.propTypes = {
  cardFavorite: PropTypes.objectOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};
