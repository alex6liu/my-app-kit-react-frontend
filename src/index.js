import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import Index from './Components/pages/Index';
import Todolist from './Components/pages/Todolist';
import Bookstore from './Components/pages/Bookstore';
import Bookchart from './Components/pages/BookChart';
import Shoppingcart from './Components/pages/Shoppingcart';
import Zhuishu from './Components/pages/Zhuishu';
import BookInfo from './Components/pages/BookInfo';
import ChapterDetail from './Components/pages/ChapterDetail';
import DoubanBook from './Components/pages/Douban/DoubanBook';
import DoubanMusic from './Components/pages/Douban/DoubanMusic';
import DoubanMovie from './Components/pages/Douban/DoubanMovie';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import Routes from './routes';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
  ),
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Switch>
        <Route path={Routes.HOME.path} exact component={Index} />
        <Route path={Routes.TODOLIST.path} exact component={Todolist} />
        <Route path={Routes.BOOKSTORE.path} exact component={Bookstore} />
        <Route path={Routes.BOOKCHART.path} exact component={Bookchart} />
        <Route path={Routes.SHOPPINGCART.path} exact component={Shoppingcart}/>
        <Route path={Routes.ZHUISHU.path} exact component={Zhuishu}/>
        <Route path="/zhuishu/:id" component={BookInfo}/>
        <Route path="/chapter/:url" component={ChapterDetail}/>
        <Route path={Routes.DOUBAN_BOOK.path} component={DoubanBook}/>
        <Route path={Routes.DOUBAN_MUSIC.path} component={DoubanMusic}/>
        <Route path={Routes.DOUBAN_MOVIE.path} component={DoubanMovie}/>
      </Switch>
    </Provider>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
