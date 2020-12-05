import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';
// import Register from '../pages/Register';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* TODO: Register page will be added in future */}
    {/* <Route path="/register" exact component={Register} /> */}
    <Route path="/import" component={Import} />
  </Switch>
);

export default Routes;
