import PropTypes from 'prop-types';
import React, { useState } from 'react';
import recipesContext from './recipesContext';

function Provider({ children }) {
  const [login, setLogin] = useState(
    {
      email: '',
      password: '',
    },
  );

  const obj = {
    login,
    setLogin,
  };

  return (
    <recipesContext.Provider value={ obj }>
      {children}
    </recipesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
