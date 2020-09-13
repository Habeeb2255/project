import React from 'react';
import Dashboard from './views/Dashboard';
import Account from './views/Account';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact strict path='/account'>
          <Account />
        </Route>
        <Route path='/' strict >
          <Dashboard />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
