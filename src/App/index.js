import React from 'react'
import { AppUI } from './AppUI';
import { Provider } from '../Context';
import './App.scss';

function App() {
  return (
    <Provider>
      <AppUI />
    </Provider>
  );
}

export default App;
