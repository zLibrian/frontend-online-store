import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesAppContext from './RecipesAppContext';

const linkAPI = {
  categoryFoodAPI: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  areasFoodAPI: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
  ingredientsFoodAPI: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
};

// const function imageingredients() {
//   const imageIngrendientsAPI = `https://www.themealdb.com/images/ingredients/${fetchFood.strIngredient}.png`;
// }

export default function RecipeAppProvider({ children }) {
  const [recipesApp, setRecipesApp] = useState([]);
  // const [areasFood, setAreasFood] = useState([]);
  // const [categoryFood, setcategoryFood] = useState([]);
  // const [ingredientsFood, setIngrendientsFood] = useState([]);

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

  return (
    <div>
      <RecipesAppContext.Provider value={ recipesApp }>
        { children }
      </RecipesAppContext.Provider>
    </div>
  );
}

RecipeAppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
