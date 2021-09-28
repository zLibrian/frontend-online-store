import React, { useContext } from 'react';
import ButtonsOfCategory from '../components/ButtonsOfCategorys';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RenderCards from '../components/RenderCards';
import RenderCardSearch from '../components/RenderCardSearch';
import SearchInput from '../components/SearchInput';
import recipesContext from '../context/recipesContext';
import { fetchApiRecipesDrinks,
  fetchApiRecipesDrinkMain, fetchApiListDrink, fetchApiCategoryDrink } from '../services';


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
      && <RenderCardSearch
        cards={ recipesApp.dataCategoryFoodAPI }
        type="Drink"
      />}
      <ButtonsOfCategory
        typeCategory="drinks"
        func={ fetchApiListDrink }
        funcFilter={ fetchApiCategoryDrink }
      />
      <RenderCards func={ fetchApiRecipesDrinkMain } type="Drink" typeCards="drinks" />
      <Footer />
    </div>
  );
}
