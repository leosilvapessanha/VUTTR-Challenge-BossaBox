import React from 'react';
import { Route, Switch } from 'react-router';

import { Test } from '../components/test';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Test} />
    </Switch>
  </>
);

export default Routes;
