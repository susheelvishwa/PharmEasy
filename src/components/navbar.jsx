// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href=""></a>
        </li>
        <li>
          <Link to="./addcart.jsx">add to card</Link>
        </li>
        <li>
          <Link to="./login.jsx">login</Link>
        </li>
        <li>
          <Link to="./signup.jsx">signup</Link>
        </li>
        <li>
          <Link to="./cart.jsx">cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
