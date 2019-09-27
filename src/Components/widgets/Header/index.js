import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss'
const SubMenu = Menu.SubMenu;
const Header = () => (
  <header>
    <div>
      <Menu
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/"><Icon type="home" />Home</Link>
        </Menu.Item>
        <Menu.Item key="todolist">
          <Link to="/todolist"><Icon type="snippets" />Todolist</Link>
        </Menu.Item>
        <Menu.Item key="bookstore">
          <Link to="/bookstore"><Icon type="book" />Bookstore</Link>
        </Menu.Item>
        <Menu.Item key="bookchart">
          <Link to="/bookchart"><Icon type="book" />Bookchart</Link>
        </Menu.Item>
        <Menu.Item key="shoppingcart">
          <Link to="/shoppingcart"><Icon type="shopping-cart" />Shoppingcart</Link>
        </Menu.Item>
        <Menu.Item key="zhuishu">
          <Link to="/zhuishu"><Icon type="appstore" />追书神器</Link>
        </Menu.Item>
        <SubMenu title={<span><Icon type="appstore" />豆瓣</span>}>
          <Menu.Item key="douban_book">
            <Link to="/douban-book"><Icon type="appstore" />豆瓣读书</Link>
          </Menu.Item>
          <Menu.Item key="douban_music">
            <Link to="/douban-music"><Icon type="appstore" />豆瓣音乐</Link>
          </Menu.Item>
          <Menu.Item key="douban_movie">
            <Link to="/douban-movie"><Icon type="appstore" />豆瓣电影</Link>
          </Menu.Item>
        </SubMenu>

      </Menu>
    </div>
  </header>
);

export default Header;