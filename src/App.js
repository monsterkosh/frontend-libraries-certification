import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import QuoteMachine from './pages/QuoteMachine';
import DrumMachine from './pages/DrumMachine';
import DrumMachine2 from './pages/DrumMachine2';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/quotemachine' component={QuoteMachine} />
        <Route path='/drummachine' component={DrumMachine} />
        <Route path='/drummachine2' component={DrumMachine2} />
      </Switch>
    </>
  );
}

export default App;
