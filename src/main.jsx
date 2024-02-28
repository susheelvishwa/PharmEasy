

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import SignUp from './components/signup.jsx';
import Login from './components/login.jsx';
import Cart from './components/cart.jsx';
import AddToCart from './components/addcart.jsx';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* Use React Router or conditional rendering to switch between pages */}
    <App />
    <SignUp />
    <Login/>
    <Cart/>
    <AddToCart/>
  </React.StrictMode>
);
