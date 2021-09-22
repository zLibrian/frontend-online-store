import React from 'react';
import Header from '../component/Header';
import searchIcon from '../images/searchIcon.svg';

export default function FoodRecipes() {
  return (
    <div>
      <Header
        title="Comidas"
        image={ <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="search"
        /> }
      />

    </div>
  );
}
