import React from 'react';

import {BrowserRouter} from 'react-router-dom';

import Routes from './routes/app.routes';

function App() {
    
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>

  );
}

export default App;
