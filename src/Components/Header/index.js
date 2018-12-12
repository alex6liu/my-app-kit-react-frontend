import React from 'react';
import { Menu, Icon } from 'antd';
import './index.scss'

const Header = () => (
  <header>
    <div>
      <Menu
        mode="horizontal"
      >
        <Menu.Item key="home">
          <a href="/"><Icon type="home" />Home</a>
        </Menu.Item>
        <Menu.Item key="todolist">
          <a href="/todolist"><Icon type="snippets" />Todolist</a>
        </Menu.Item>
        <Menu.Item key="bookstore">
        <a href="/bookstore"><Icon type="book" />Bookstore</a>
        </Menu.Item>
        <Menu.Item key="shoppingcart">
          <a href="/shoppingcart"><Icon type="shopping-cart" />Shoppingcart</a>
        </Menu.Item>

      </Menu>
    </div>
  </header>
);

export default Header;