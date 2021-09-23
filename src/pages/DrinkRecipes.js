import React from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import { fetchApiRecipesDrinks } from '../services';

export default function DrinkRecipes() {
  return (
    <div>
      <Header
        title="Bebidas"
      />
      <SearchInput fetchFood={ fetchApiRecipesDrinks } />
    </div>
  );
}
