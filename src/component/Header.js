import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

export default function Header({ title, image, history }) {
  return (
    <div>
      <header>
        <Link to="/perfil">
          <img
            src={ profileIcon }
            data-testid="profile-top-btn"
            alt="profile"
            type="button"
          />
        </Link>
        <h1 data-testid="page-title">
          {title }
        </h1>
        { image }
        <input data-testid="search-input" style={ { display: `${none}` } } />
      </header>
    </div>
  );
}
