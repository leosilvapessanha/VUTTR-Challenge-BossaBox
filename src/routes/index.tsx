import React from 'react';
import { Route, Switch } from 'react-router';

import Header from '../components/header';

interface IThemes {
  toggleTheme(): void;
}

const Routes: React.FC<IThemes> = ({ toggleTheme }) => (
  <>
    <Switch>
      <Route path="/" exact component={Header} />
    </Switch>
  </>
);

export default Routes;
