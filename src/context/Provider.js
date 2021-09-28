import PropTypes from 'prop-types';
import React, { useState } from 'react';
import recipesContext from './recipesContext';

function Provider({ children }) {
  const [login, setLogin] = useState(
    {
      email: '',
      password: '',
    },
  );
  const [recipesApp, setRecipesApp] = useState({
    dataCategoryFoodAPI: [],
    filtrar: false,
    filter: {
      search: '',
      radioSelect: '',
      typeRecipe: [],
    },
    loading: true,
  });

  const [filterCategory, setFilterCategory] = useState({
    loading: true,
    categorySelected: '',
    categoriesFilter: [] });

  const obj = {
    login,
    setLogin,
    recipesApp,
    setRecipesApp,
    filterCategory,
    setFilterCategory,
  };

  return (
    <recipesContext.Provider value={ obj }>
      {children}
    </recipesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
