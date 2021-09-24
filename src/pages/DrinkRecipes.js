import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';

export default function DrinkRecipes() {
  return (
    <div>
      <Header
        title="Bebidas"
      />
      <SearchInput />
      <Footer />
    </div>
  );
}
