import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Context from './Context';
import stores from './reducers';
import Landing from './routes/Landing';
import { useContextCreator } from './hooks';
import './theme.css';
/**
 * fontawesome initialize
 * */
library.add(faAngleDown);

export default function App() {
  const context = useContextCreator();

  return (
    <Provider store={stores}>
      <Router>
        <Context.Provider value={context}>
          <Landing />
        </Context.Provider>
      </Router>
    </Provider>
  );
}
