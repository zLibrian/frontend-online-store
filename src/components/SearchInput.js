import React, { useState } from 'react';
import searchIcon from '../images/searchIcon.svg';

export default function SearchInput() {
  const [toogleInput, setToogleInput] = useState(false);
  return (
    <div>
      <button type="button" onClick={ () => setToogleInput(!toogleInput) }>
        <img src={ searchIcon } alt="search" data-testid="search-top-btn" />
      </button>
      { toogleInput && <input type="text" data-testid="search-input" />}
    </div>
  );
}
