import React, { useState } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';

export default function SearchInput({ fetchFood }) {
  const [headerFilterBar, setHeaderFilterBar] = useState({
    search: '',
    radioSelect: '',
  });

  function handleSearchBar({ target }) {
    const { name, value } = target;
    setHeaderFilterBar({ ...headerFilterBar, [name]: value });
  }
  async function handleClick() {
    const { search, radioSelect } = headerFilterBar;
    if (search.length > 1 && radioSelect === 'f') {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    const request = await fetchFood(radioSelect, search);
    console.log(request);
  }
  function renderSearchBar() {
    return (
      <div>
        <input
          type="text"
          data-testid="search-input"
          name="search"
          value={ headerFilterBar.search }
          onChange={ handleSearchBar }
        />
        <label htmlFor="ingredient">
          Ingredientes
          <input
            value="i"
            name="radioSelect"
            id="ingredient"
            type="radio"
            data-testid="ingredient-search-radio"
            onChange={ handleSearchBar }
          />
        </label>
        <label htmlFor="name-search">
          Nome
          <input
            value="s"
            name="radioSelect"
            id="name-search"
            type="radio"
            data-testid="name-search-radio"
            onChange={ handleSearchBar }
          />
        </label>
        <label htmlFor="first-letter">
          Primeira letra
          <input
            value="f"
            name="radioSelect"
            id="first-letter"
            type="radio"
            data-testid="first-letter-search-radio"
            onChange={ handleSearchBar }
          />
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ handleClick }
        >
          Buscar
        </button>
      </div>
    );
  }
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

SearchInput.propTypes = {
  fetchFood: PropTypes.func.isRequired,
};
