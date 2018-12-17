import { combineReducers } from 'redux';
import getBooks from './bookstore/getBooks';
import getBookTags from './bookstore/getBookTags';
import haveReadCount from './bookstore/haveReadCount';
import indexReducer from './indexReducer';

const rootReducer = combineReducers({
    getBooks,
    getBookTags,
    haveReadCount,
    indexReducer,
});

export default rootReducer;