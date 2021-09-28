import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

// Cria a context e exporta o uso dela atraves do useContext();
// Para utilizar basta importar 'useRecipesContext' e desestruturar da forma tradicional;
// Ex: import { useRecipesContext } from '../context/Provider';
// const { recipesApp, setRecipesApp } = useRecipesContext();
const RecipesContext = createContext();
export const useRecipesContext = () => useContext(RecipesContext);

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
    <RecipesContext.Provider value={ obj }>
      {children}
    </RecipesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
