import React, { useContext } from 'react';
import Header from '../components/Header';
import RenderCardSearch from '../components/RenderCardSearch';
import SearchInput from '../components/SearchInput';
import recipesContext from '../context/recipesContext';
import { fetchApiRecipesFood } from '../services';

export default function FoodRecipes() {
  const { recipesApp } = useContext(recipesContext);
  return (
    <div>
      <Header
        title="Comidas"
      />
      <SearchInput fetchFood={ fetchApiRecipesFood } />
      {recipesApp.dataCategoryFoodAPI.length > 0
      && <RenderCardSearch cards={ recipesApp.dataCategoryFoodAPI } type="Meal" />}
    </div>
  );
}
