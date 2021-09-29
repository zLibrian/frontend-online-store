import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import searchIcon from '../images/searchIcon.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRecipesContext } from '../context/Provider';

export default function SearchInput({ fetchFood, typeLowCase, typeUpperCase }) {
  const [headerFilterBar, setHeaderFilterBar] = useState({
    search: '',
    radioSelect: '',
    typeRecipe: [],
  });
  const history = useHistory();

  // Verifica o caminho atual da pagina para fazer a requisicao de acordo com o tipo da pagina;
  const { pathname } = useLocation();
  const currentePageType = pathname.includes('comidas') ? 'foods' : 'drinks';

  const { recipesApp, setRecipesApp } = useRecipesContext();

  function handleSearchBar({ target }) {
    const { name, value } = target;
    setHeaderFilterBar({ ...headerFilterBar, [name]: value });
  }
  function requestApi() {
    const { radioSelect, search } = headerFilterBar;
    fetchFood(radioSelect, search, currentePageType)
      .then((request) => {
        const typeRecipe = request[typeLowCase];
        if (typeRecipe.length === 1) {
          setRecipesApp({
            ...recipesApp, dataCategoryFoodAPI: typeRecipe, loading: false,
          });
          history.push(`${pathname}/${typeRecipe[0][`id${typeUpperCase}`]}`);
        } else {
          setRecipesApp({
            ...recipesApp, dataCategoryFoodAPI: typeRecipe, loading: false,
          });
        }
      })
      .catch(() => global
        .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.'));
  }
  function handleClick() {
    const { search, radioSelect } = headerFilterBar;
    if (search.length > 1 && radioSelect === 'f') {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    requestApi();
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
          className="btn btn-primary"
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
      <button
        type="button"
        onClick={ () => setToggleInput(!toggleInput) }
        className="btn btn-warning"
      >
        <img src={ searchIcon } alt="search" data-testid="search-top-btn" />
      </button>
      { toggleInput && renderSearchBar()}
    </div>
  );
}

SearchInput.propTypes = {
  fetchFood: PropTypes.func.isRequired,
  typeLowCase: PropTypes.string.isRequired,
  typeUpperCase: PropTypes.string.isRequired,
};
