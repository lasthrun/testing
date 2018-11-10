import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Context from './Context';
import stores from './reducers';
import Landing from './routes/Landing';
import User from './routes/User';
import { useContextCreator } from './hooks';
import './theme.css';
import './icon';

export default function App() {
  const context = useContextCreator();

  return (
    <Provider store={stores}>
      <Router>
        <Context.Provider value={context}>
          <Landing />
          <User />
        </Context.Provider>
      </Router>
    </Provider>
  );
}
