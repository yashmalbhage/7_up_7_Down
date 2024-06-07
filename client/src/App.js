import React from 'react';
import Game from './components/Game';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};

export default App;
