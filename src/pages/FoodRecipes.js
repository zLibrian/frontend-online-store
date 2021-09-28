import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RenderCardSearch from '../components/RenderCardSearch';
import SearchInput from '../components/SearchInput';
import recipesContext from '../context/recipesContext';
import { fetchApiCategoryFood, fetchApiListFood,
  fetchApiRecipesFood, fetchApiRecipesFoodMain } from '../services';
import RenderCards from '../components/RenderCards';
import ButtonsOfCategory from '../components/ButtonsOfCategorys';


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
      <ButtonsOfCategory
        typeCategory="meals"
        func={ fetchApiListFood }
        funcFilter={ fetchApiCategoryFood }
      />
      <RenderCards func={ fetchApiRecipesFoodMain } type="Meal" typeCards="meals" />
      <Footer />
    </div>
  );
}
