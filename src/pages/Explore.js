import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Explore() {
  return (
    <div>
      <Header title="Explorar" />
      <Link to="/explorar/comidas">
        <button type="button" data-testid="explore-food">
          Explorar Comidas
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button type="button" data-testid="explore-drinks">
          Explorar Bebidas
        </button>
      </Link>
    </div>
  );
}
