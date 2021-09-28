import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RenderCardSearch from '../components/RenderCardSearch';
import SearchInput from '../components/SearchInput';
import recipesContext from '../context/recipesContext';
import { fetchApiCategoryFood, fetchApiListFood,
  fetchApiRecipesFood, fetchApiRecipesFoodMain } from '../services';
import RenderCards from '../components/RenderCards';
import ButtonsOfCategory from '../components/ButtonsOfCategorys';
import '../css/foodRecipes.css';

export default function FoodRecipes() {
  const { recipesApp } = useContext(recipesContext);
  return (
    <>
      <div className="headerFood">
        <Header
          title="Comidas"
        />
        <SearchInput
          fetchFood={ fetchApiRecipesFood }
          typeLowCase="meals"
          typeUpperCase="Meal"
        />
      </div>
      {recipesApp.dataCategoryFoodAPI.length > 0
      && <RenderCardSearch cards={ recipesApp.dataCategoryFoodAPI } type="Meal" />}
      <ButtonsOfCategory
        typeCategory="meals"
        func={ fetchApiListFood }
        funcFilter={ fetchApiCategoryFood }
      />
      <RenderCards func={ fetchApiRecipesFoodMain } type="Meal" typeCards="meals" />
      <Footer />
    </>
  );
}
