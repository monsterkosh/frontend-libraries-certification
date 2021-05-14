import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import QuoteMachine from './pages/QuoteMachine';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/quotemachine' component={QuoteMachine} />
      </Switch>
    </>
  );
}

export default App;
