import { combineReducers } from 'redux';
import getBooks from './bookstore/getBooks';
import getBookTags from './bookstore/getBookTags';
import haveReadCount from './bookstore/haveReadCount';

const rootReducer = combineReducers({
    getBooks,
    getBookTags,
    haveReadCount,
});

export default rootReducer;