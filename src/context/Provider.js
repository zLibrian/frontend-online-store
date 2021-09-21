import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import recipesContext from './recipesContext';

const linkAPI = {
  categoryFoodAPI: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  areasFoodAPI: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
  ingredientsFoodAPI: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
};

// const function imageingredients() {
//   const imageIngrendientsAPI = `https://www.themealdb.com/images/ingredients/${fetchFood.strIngredient}.png`;
// }

function Provider({ children }) {
  const [login, setLogin] = useState(
    {
      email: '',
      password: '',
    },
  );
  const [recipesApp, setRecipesApp] = useState([]);

  useEffect(() => {
    const fetchFood = async (link) => {
      const { meals } = await fetch(link).then((response) => response.json());
      setRecipesApp(meals);
      console.log(meals);
      // return meals;
    };
    fetchFood(linkAPI.ingredientsFoodAPI);
    fetchFood(linkAPI.areasFoodAPI);
    fetchFood(linkAPI.categoryFoodAPI);
    // fetchFood(imageIngrendientsAPI);
  }, []);

  const obj = {
    login,
    setLogin,
    recipesApp,
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
