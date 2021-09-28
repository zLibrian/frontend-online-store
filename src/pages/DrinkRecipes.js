import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RenderCardSearch from '../components/RenderCardSearch';
import SearchInput from '../components/SearchInput';
import { useRecipesContext } from '../context/Provider';
import { fetchApiRecipes } from '../services';

export default function DrinkRecipes() {
  const { recipesApp } = useRecipesContext();

  return (
    <div>
      <Header
        title="Bebidas"
      />
      <SearchInput
        fetchFood={ fetchApiRecipes }
        typeLowCase="drinks"
        typeUpperCase="Drink"
      />
      {recipesApp.dataCategoryFoodAPI.length > 0
      && <RenderCardSearch cards={ recipesApp.dataCategoryFoodAPI } type="Drink" />}
      <Footer />
    </div>
  );
}
