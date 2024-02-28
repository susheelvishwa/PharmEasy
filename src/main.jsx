

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* Use React Router or conditional rendering to switch between pages */}
    <App />
  </React.StrictMode>
);
