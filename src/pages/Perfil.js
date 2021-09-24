import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Perfil() {
  function getEmailLocalStorage() {
    const email = localStorage.getItem('user');
    return email;
  }

  function handleClick() {
    localStorage.clear();
  }
  return (
    <div>
      <Header title="Perfil" />
      <p data-testid="profile-email">{getEmailLocalStorage()}</p>
      <Link to="/receitas-feitas">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleClick }
        >
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
}
