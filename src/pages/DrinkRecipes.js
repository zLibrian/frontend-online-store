import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RenderCardSearch from '../components/RenderCardSearch';
import SearchInput from '../components/SearchInput';
import recipesContext from '../context/recipesContext';
import { fetchApiRecipesDrinks } from '../services';

export default function DrinkRecipes() {
  const { recipesApp } = useContext(recipesContext);

  return (
    <div>
      <Header
        title="Bebidas"
      />
      <SearchInput fetchFood={ fetchApiRecipesDrinks } />
      {recipesApp.dataCategoryFoodAPI.length > 0
      && <RenderCardSearch cards={ recipesApp.dataCategoryFoodAPI } type="Drink" />}
      <SearchInput />
      <Footer />
    </div>
  );
}
