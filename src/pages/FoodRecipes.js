import React from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import { fetchApiRecipesFood } from '../services';

export default function FoodRecipes() {
  return (
    <div>
      <Header
        title="Comidas"
      />
      <SearchInput fetchFood={ fetchApiRecipesFood } />
    </div>
  );
}
