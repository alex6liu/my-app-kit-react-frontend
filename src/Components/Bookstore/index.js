import React, { Component } from 'react';

import Header from '../Header';
import './index.scss';
import { bookstoreUrl } from '../../apiUrl';

class Bookstore extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      name: '',
      author: '',
      have: false,
      read: false,
      tags: [],
    };
  }

  componentDidMount() {
    fetch(bookstoreUrl)
      .then(res => res.json())
      .then(myjson => this.setState({books: myjson}))
  }

  componentDidUpdate() {}

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
    .then(() => fetch(bookstoreUrl)
    .then(res => res.json())
    .then(myjson => this.setState({books: myjson})))
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
    .then(() => fetch(bookstoreUrl)
      .then(res => res.json())
      .then(myjson => this.setState({books: myjson})))
  }

  handleDelete(id) {
    fetch(bookstoreUrl+`/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => fetch(bookstoreUrl)
    .then(res => res.json())
    .then(myjson => this.setState({books: myjson})))
  }

  handleSubmit(name, author, have, read, tags) {
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
    .then(() => fetch(bookstoreUrl)
    .then(res => res.json())
    .then(myjson => this.setState({books: myjson})))
  }

  handelChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  handelChangeAuthor(e) {
    this.setState({
      author: e.target.value
    })
  }
  handelChangeHave(e) {
    this.setState({
      have: e.target.value
    })
  }
  handelChangeRead(e) {
    this.setState({
      read: e.target.value
    })
  }
  handelChangeTags(e) {
    this.setState({
      tags: e.target.value
    })
  }

  createTable(books) {
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
                  <div>
                    <input type="checkbox" id="have" name="have" onClick={() => this.handleHave(books[i]._id, books[i].have)} checked={books[i].have ? true : false} />
                    <label for="have">Have</label>
                  </div>
                </td>
                <td>
                  <div>
                    <input type="checkbox" id="read" name="read" onClick={() => this.handleRead(books[i]._id, books[i].read)} checked={books[i].read ? true : false} />
                    <label for="read">Read</label>
                  </div>
                </td>
                <td>
                  <button onClick={() => this.handleDelete(books[i]._id)}>Delete</button>
                </td>
            </tr>
        );
    }
    return items;
  }

  render() {
    const { books } = this.state;

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
              {this.createTable(books)}
            </tbody>
          </table>
          <br />
          <br />
          <div className="add-new-book">
          <h2>Add new book</h2>
            <input type="text" placeholder="book name" onChange={this.handelChangeName.bind(this)}/>
            <input type="text" placeholder="author" onChange={this.handelChangeAuthor.bind(this)}/>
            <input type="text" placeholder="have" onChange={this.handelChangeHave.bind(this)}/>
            <input type="text" placeholder="read" onChange={this.handelChangeRead.bind(this)}/>
            <textarea onChange={this.handelChangeTags.bind(this)}></textarea>
            <button onClick={() => this.handleSubmit(this.state.name, this.state.author, this.state.have, this.state.read, this.state.tags)}>Submit</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
} 

export default Bookstore;