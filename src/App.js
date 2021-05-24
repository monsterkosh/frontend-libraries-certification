import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import QuoteMachine from './pages/QuoteMachine';
import DrumMachine from './pages/DrumMachine';
import DrumMachine2 from './pages/DrumMachine2';
import Calculator from './pages/Calculator';
import CalculatorTwo from './pages/CalculatorTwo';
import Markdown from './pages/Markdown';
import MarkdownTwo from './pages/Markdown2';
import PomodoroClock from './pages/PomodoroClock';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/quotemachine' component={QuoteMachine} />
        <Route path='/drummachine' component={DrumMachine} />
        <Route path='/drummachine2' component={DrumMachine2} />
        <Route path='/calculator' component={Calculator} />
        <Route path='/calculator2' component={CalculatorTwo} />
        <Route path='/markdown' component={Markdown} />
        <Route path='/markdown2' component={MarkdownTwo} />
        <Route path='/pomodoroclock' component={PomodoroClock} />
      </Switch>
    </>
  );
}

export default App;

// 31:00
