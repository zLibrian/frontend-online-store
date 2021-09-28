import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RenderCardSearch from '../components/RenderCardSearch';
import SearchInput from '../components/SearchInput';
import { useRecipesContext } from '../context/Provider';
import { fetchApiRecipes } from '../services';

export default function FoodRecipes() {
  const { recipesApp } = useRecipesContext();
  return (
    <div>
      <Header
        title="Comidas"
      />
      <SearchInput
        fetchFood={ fetchApiRecipes }
        typeLowCase="meals"
        typeUpperCase="Meal"
      />
      {recipesApp.dataCategoryFoodAPI.length > 0
      && <RenderCardSearch cards={ recipesApp.dataCategoryFoodAPI } type="Meal" />}
      <Footer />
    </div>
  );
}
