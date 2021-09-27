import PropTypes from 'prop-types';
import React, { useState } from 'react';
import recipesContext from './recipesContext';

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
    <recipesContext.Provider value={ obj }>
      {children}
    </recipesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
