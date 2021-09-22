import React from 'react';
import Header from '../component/Header';
import searchIcon from '../images/searchIcon.svg';

export default function ExploreFoodArea() {
  return (
    <div>
      <Header
        title="Explorar Origem"
        image={ <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="search"
        /> }
      />
    </div>
  );
}
