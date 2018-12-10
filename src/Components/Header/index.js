import React from 'react';
import './index.scss'

const Header = () => (
  <header>
    <div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/todolist">Todolist</a></li>
        <li><a href="/bookstore">Bookstore</a></li>
        <li><a href="/shoppingcart">Shoppingcart</a></li>
      </ul>
    </div>
  </header>
);

export default Header;