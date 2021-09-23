import React, { useContext } from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import { fetchApiRecipesFood } from '../services';
import recipesContext from '../context/recipesContext';

export default function FoodRecipes() {
    const { recipesApp } = useContext(recipesContext);
    //console.log(recipesApp, 'texto de teste');
  return (
    <div>
      <Header
        title="Comidas"
      />
      <SearchInput fetchFood={ fetchApiRecipesFood } />
    </div>
  );
}
