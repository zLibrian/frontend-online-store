import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';

export default function FoodRecipes() {
  return (
    <div>
      <Header
        title="Comidas"
      />
      <SearchInput />
      <Footer />
    </div>
  );
}
