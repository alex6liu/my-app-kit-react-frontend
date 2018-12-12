import React, { Component } from 'react';
import { Table, Divider, Tag, Button, Input } from 'antd';

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
      have: '',
      read: '',
      tags: '',
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
      .then(myjson => this.setState({
        books: myjson
      })))
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
      .then(myjson => this.setState({
        books: myjson
      })))
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
      .then(myjson => this.setState({
        books: myjson
      })))
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
      .then(myjson => this.setState({
        books: myjson,
        name: '',
        author: '',
        have: '',
        read: '',
        tags: '',
      })))
    
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

  render() {
    const { books, name, author, have, read, tags } = this.state;
    const { Column } = Table;
    return (
      <React.Fragment>
        <Header/>
        <h1>This is my bookstore</h1>
        <div className="bookstore_main-container">
          <Table dataSource={books}>
            <Column title="Id" dataIndex="_id" key=""/> 
            <Column title="Name" dataIndex="name" key=""/> 
            <Column title="Author" dataIndex="author" key=""/> 
            <Column title="Have" dataIndex="have" key="" render={read => (
              read ? 'Yes' : 'No'
            )}/> 
            <Column title="Read" dataIndex="read" key="" render={read => (
              read ? 'Yes' : 'No'
            )}/> 
            <Column title="Tags" dataIndex="tags" key="" render={tags => (
              <span>
                {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
              </span>
            )}/> 
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <React.Fragment>
                  <Button type="primary" onClick={() => this.handleHave(record._id)}>
                    Have
                  </Button>
                  <Divider type="vertical" />
                  <Button type="primary" onClick={() => this.handleRead(record._id)}>
                    Read
                  </Button>
                  <Divider type="vertical" />
                  <Button type="primary" onClick={() => this.handleDelete(record._id)}>
                    Delete
                  </Button>
                </React.Fragment>
              )}
            />

          </Table>

          <div className="add-new-book">
            <h2>Add new book</h2>
            <Input type="text" placeholder="book name" onChange={this.handelChangeName.bind(this)} value={name}/>
            <Input type="text" placeholder="author" onChange={this.handelChangeAuthor.bind(this)} value={author}/>
            <Input type="text" placeholder="have" onChange={this.handelChangeHave.bind(this)} value={have}/>
            <Input type="text" placeholder="read" onChange={this.handelChangeRead.bind(this)} value={read}/>
            <Input.TextArea onChange={this.handelChangeTags.bind(this)} value={tags}/>
            <Button type="primary" onClick={() => this.handleSubmit(name, author, have, read, tags)}>Submit</Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
} 

export default Bookstore;