import React, { useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

export default function FavoriteButton({ index, favorite, cardFavorite, type }) {
  const [favorited, setFavorited] = useState(favorite);

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
    <button
      type="button"
      data-testid={ index !== undefined
        ? `${index}-horizontal-favorite-btn`
        : 'favorite-btn' }
      onClick={ handleClick }
      src={ imageSource }
    >
      <img src={ imageSource } alt="Botão de favorito" />
    </button>
  );
}

FavoriteButton.propTypes = {
  favorite: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  cardFavorite: PropTypes.objectOf(PropTypes.object).isRequired,
  type: PropTypes.number.isRequired,
};
