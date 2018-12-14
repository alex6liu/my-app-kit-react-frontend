import { bookstoreUrl } from '../../apiUrl';
import { getBookTags } from './getBookTags';
import { haveReadCount } from './haveReadCount';

export const receiveBooks = json => ({
    type: 'RECEIVE_BOOKS',
    payload: {
        books: json,
    }
});

export const getBooks = () => (dispatch) => (
    fetch(bookstoreUrl)
        .then(res => res.json())
        .then(myjson => dispatch(receiveBooks(myjson)))
        .then(() => dispatch(haveReadCount()))
);

// export const setDefault = () => ({
//     type: 'SET_DEFAULT',
// })

export const handleHaveAction = (id, have) => (dispatch) => (
    fetch(bookstoreUrl+`/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "have": !have,
        }),
      })
      .then(() => dispatch(getBooks()))
      .then(() => dispatch(haveReadCount()))
);

export const handleReadAction = (id, read) => (dispatch) => (
    fetch(bookstoreUrl+`/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "read": !read,
        }),
      })
      .then(() => dispatch(getBooks()))
      .then(() => dispatch(haveReadCount()))
);

export const handleDeleteAction = (id) => (dispatch) => (
    fetch(bookstoreUrl+`/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => dispatch(getBooks()))
      .then(() => dispatch(getBookTags()))
      .then(() => dispatch(haveReadCount()))
);

export const addBook = (name, author, have, read, tags) => (dispatch) => (
    fetch(bookstoreUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:name,
        author:author,
        have:have,
        read:read,
        tags:tags
      }),
    })
    .then(() => dispatch(getBooks()))
    .then(() => dispatch(getBookTags()))
  );