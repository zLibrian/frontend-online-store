import React from 'react';
import Header from '../component/Header';
import searchIcon from '../images/searchIcon.svg';

export default function DrinkRecipes() {
  return (
    <div>
      <Header
        title="Bebidas"
        image={ <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="search"
        /> }
      />
    </div>
  );
}
