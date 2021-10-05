import React from 'react';
import { useLocation } from 'react-router';
import CopyButton from '../components/CopyButton';
import FavoriteButton from '../components/FavoriteButton';
import Header from '../components/Header';

export default function FavoriteRecipe() {
  const localStorageFavorite = JSON.parse(localStorage.getItem('favoriteRecipes')) || '';
  const { pathname } = useLocation();
  return (
    <div>
      <Header title="Receitas Favoritas" />
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drink</button>
      {localStorageFavorite && localStorageFavorite.map((recipe, index) => (
        <div key={ recipe.id }>
          <img
            width="150px"
            src={ recipe.image }
            alt=""
            data-testid={ `${index}-horizontal-image` }
          />
          <h3
            data-testid={ `${index}-horizontal-top-text` }
          >
            {`${recipe.area || 'Alcoholic'} - ${recipe.category}`}
          </h3>
          <h2 data-testid={ `${index}-horizontal-name` }>
            {recipe.name}
          </h2>
          <CopyButton
            pathname={ pathname }
            index2={ index }
            typeUrl={ `${recipe.type}s/${recipe.id}` }
          />
          <FavoriteButton index={ index } favorite />
        </div>
      ))}
    </div>
  );
}
