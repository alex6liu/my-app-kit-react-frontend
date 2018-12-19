import { combineReducers } from 'redux';
import getBooks from './bookstore/getBooks';
import getBookTags from './bookstore/getBookTags';
import haveReadCount from './bookstore/haveReadCount';
import indexReducer from './indexReducer';
import shoppingcartReducer from './shoppingcartReducer';
import getZhuishuReducer from './zhuishu/getZhuishu';

const rootReducer = combineReducers({
    getBooks,
    getBookTags,
    haveReadCount,
    indexReducer,
    shoppingcartReducer,
    getZhuishuReducer,
});

export default rootReducer;