import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import Index from './Components/Index';
import Todolist from './Components/Todolist';
import Bookstore from './Components/Bookstore';
import Shoppingcart from './Components/Shoppingcart';
import * as serviceWorker from './serviceWorker';

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
        <Route path="/" exact component={Index} />
        <Route path="/todolist" exact component={Todolist} />
        <Route path="/bookstore" exact component={Bookstore} />
        <Route path="/shoppingcart" exact component={Shoppingcart}/>
      </Switch>
    </Provider>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
