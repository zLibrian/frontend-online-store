import React from 'react';
import { Route, Switch } from 'react-router';
import Provider from '../context/Provider';
import Login from './Login';

export default function Recipes() {
  return (
    <div>
      <Provider>
        <Switch>

          <Route exact patch="/" component={ Login } />
        </Switch>
      </Provider>
    </div>
  );
}
