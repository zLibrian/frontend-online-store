import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

// Cria a context e exporta o uso dela atraves do useContext();
// Para utilizar basta importar 'useRecipesContext' e desestruturar da forma tradicional;
// Ex: import { useRecipesContext } from '../context/Provider';
// const { recipesApp, setRecipesApp } = useRecipesContext();
const RecipesContext = createContext();
export const useRecipesContext = () => useContext(RecipesContext);

// const linkAPI = {
//   categoryFoodAPI: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
//   areasFoodAPI: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
//   ingredientsFoodAPI: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
// };

// const function imageIngredients() {
//   const imageIngrendientsAPI = `https://www.themealdb.com/images/ingredients/${fetchFood.strIngredient}.png`;
// }

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
    // dataAreasFoodAPI: {},
    // dataIngredientsFoodAPI: {},
  });

  // useEffect(() => {
  //   async function fetchApiFood() {

  //   }
  // }, []);

  const obj = {
    login,
    setLogin,
    recipesApp,
    setRecipesApp,
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
