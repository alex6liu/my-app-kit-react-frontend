import { combineReducers } from 'redux';
import getBooks from './bookstore/getBooks';
import getBookTags from './bookstore/getBookTags';
import haveReadCount from './bookstore/haveReadCount';
import indexReducer from './indexReducer';
import shoppingcartReducer from './shoppingcartReducer';
import getZhuishuReducer from './zhuishu/getZhuishu';
import doubanBookReducer from './douban/doubanBook';
import doubanMusicReducer from './douban/doubanMusic';
import doubanMovieReducer from './douban/doubanMovie';

const rootReducer = combineReducers({
    getBooks,
    getBookTags,
    haveReadCount,
    indexReducer,
    shoppingcartReducer,
    getZhuishuReducer,
    doubanBookReducer,
    doubanMusicReducer,
    doubanMovieReducer,
});

export default rootReducer;