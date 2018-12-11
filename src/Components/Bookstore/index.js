import React, { Component } from 'react';

import Header from '../Header';
import './index.scss';
import { bookstoreUrl } from '../../apiUrl';

class Bookstore extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    fetch(bookstoreUrl)
      .then(res => res.json())
      .then(myjson => this.setState({books: myjson}))
  }

  handleHave(id, have) {
    fetch(bookstoreUrl+`/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "have": !have,
      }),
    })
  }

  handleRead(id, read) {
    fetch(bookstoreUrl+`/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "read": !read,
      }),
    })
  }

  render() {
    const { books } = this.state;

    const items =[];
    for (let i = 0; i < books.length; i++) {
        items.push(
            <tr>
                <td>
                  {books[i]._id}
                </td>
                <td>
                  {books[i].name}
                </td>
                <td>
                  {books[i].author}
                </td>
                <td>{books[i].have ? 'Yes' : 'No'}</td>
                <td>{books[i].read ? 'Yes' : 'No'}</td>
                <td>{books[i].tags}</td>
                <td>
                  <button onClick={() => this.handleHave(books[i]._id, books[i].have)}>Have</button>
                </td>
                <td>
                  <button onClick={() => this.handleRead(books[i]._id, books[i].read)}>Read</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
            </tr>
        );
    }

    return (
      <React.Fragment>
        <Header/>
        <h1>This is my bookstore</h1>
        <div className="bookstore_main-container">
          <table border="1" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Author</td>
                <td>Have</td>
                <td>Read</td>
                <td>Tags</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {items}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
} 

export default Bookstore;