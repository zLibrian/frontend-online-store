import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Perfil() {
  function getEmailLocalStorage() {
    if (localStorage.user) {
      const { email } = JSON.parse(localStorage.getItem('user'));
      return `E-mail: ${email}`;
    }
  }

  function handleClick() {
    localStorage.clear();
  }
  return (
    <div style={ { textAlign: 'center' } }>
      <header className="header">
        <Header title="Perfil" />
      </header>
      <p data-testid="profile-email">{getEmailLocalStorage()}</p>
      <Link to="/receitas-feitas">
        <button
          className="btn btn-outline-dark"
          type="button"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button
          className="btn btn-outline-dark"
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button
          className="btn btn-outline-dark"
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
