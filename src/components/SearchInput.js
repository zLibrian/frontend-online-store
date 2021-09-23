import React, { useState } from 'react';
import searchIcon from '../images/searchIcon.svg';

function renderSearchBar() {
  return (
    <div>
      <input type="text" data-testid="search-input" />
      <label htmlFor="ingredient">
        Ingredientes
        <input
          id="ingredient"
          type="radio"
          data-testid="ingredient-search-radio"
        />
      </label>
      <label htmlFor="name-search">
        Nome
        <input
          id="name-search"
          type="radio"
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="first-letter">
        Primeira letra
        <input
          id="first-letter"
          type="radio"
          data-testid="first-letter-search-radio"
        />
      </label>
      <button type="button" data-testid="exec-search-btn">Buscar</button>
    </div>
  );
}

export default function SearchInput() {
  const [toggleInput, setToggleInput] = useState(false);
  return (
    <div>
      <button type="button" onClick={ () => setToggleInput(!toggleInput) }>
        <img src={ searchIcon } alt="search" data-testid="search-top-btn" />
      </button>
      { toggleInput && renderSearchBar()}
    </div>
  );
}
