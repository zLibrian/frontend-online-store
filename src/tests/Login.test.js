import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utils/renderWithRouter';
import App from '../App';

describe('Teste o componente <Login.js />', () => {
  test('Verifica se a página contém os input', () => {
    renderWithRouter(<App />);
    const email = screen.getByTestId('email-input');
    expect(email).toBeInTheDocument();
    const password = screen.getByTestId('password-input');
    expect(password).toBeInTheDocument();
  });
  test('Verifica se o button esta ligado ou desligado', () => {
    renderWithRouter(<App />);
    const button = screen.getByTestId('login-submit-btn');
    expect(button).toBeInTheDocument();
  });
  test('se a pagina esta no Login', () => {
    const { history } = renderWithRouter(<App />);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });
});
