import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/style.css';
import '../src/styles/utils.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);