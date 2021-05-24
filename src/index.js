import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import SettingsContextProvider from './context/SettingsContext';

ReactDOM.render(
  <Router>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </Router>,
  document.getElementById('root')
);
