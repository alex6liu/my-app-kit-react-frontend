import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header';
import './index.scss';
import { todolistUrl } from '../../apiUrl';
import { Table, Divider, Tag, Button, Input, Checkbox, DatePicker } from 'antd';
import moment from 'moment';

class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      name: '',
      createTime: null,
      completed: null,
      defaultDate: null,
    };
  }

  componentDidMount() {
    fetch(todolistUrl)
      .then(res => res.json())
      .then(myjson => this.setState({todos: myjson}))
  }

  handleCompleted(id, completed) {
    fetch(todolistUrl+`/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "completed": !completed,
      }),
    })
    .then(() => fetch(todolistUrl)
    .then(res => res.json())
    .then(myjson => this.setState({
      todos: myjson
    })))

  }

  handleDelete(id) {
    fetch(todolistUrl+`/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => fetch(todolistUrl)
      .then(res => res.json())
      .then(myjson => this.setState({
        todos: myjson
      })))
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleChangeCreateTime(date, dateString) {
    this.setState({
      createTime: dateString,
      defaultDate: date,
    })
  }

  handleChangeComplete(e) {
    this.setState({
      completed: e.target.checked
    })
  }

  handleSubmit(name, createTime, completed) {
    fetch(todolistUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:name,
        createTime:createTime,
        completed:completed,
      }),
    })
    .then(() => fetch(todolistUrl)
      .then(res => res.json())
      .then(myjson => this.setState({
        todos: myjson,
        name: '',
        createTime: null,
        completed: false,
        defaultDate: null,
      })))
    
  }

  render() {
    const { todos, name, createTime, completed, defaultDate } = this.state;
   
    const columns = [
      {
        title: 'Id',
        dataIndex: '_id',
        key: 'id',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Create Time',
        dataIndex: 'createTime',
        key: 'createTime',
      },
      {
        title: 'Completed',
        dataIndex: 'completed',
        key: 'completed',
        render: completed => (
          completed ? 'Yes' : 'No'
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <React.Fragment>
            <Button type="primary" onClick={() => this.handleCompleted(record._id, record.completed)}>
              {!record.completed ? "completed" : "Not completed"} 
            </Button>
            <Divider type="vertical" />
            <Button type="danger" onClick={() => this.handleDelete(record._id)}>
              Delete
            </Button>
          </React.Fragment>
        ),
      }
    ];
    return (
      <React.Fragment>
        <Header/>
        <h1>
          This is my Todolist
        </h1>
        <div className="todolist_main-container">
        <Table dataSource={todos} columns={columns}/>

          <div className="add-new-todolist">
            <h2>Add new todolist</h2>
            <div className="info-container">
              <Input type="text" placeholder="todo name" onChange={this.handleChangeName.bind(this)} value={name}/>
              <DatePicker placeholder="createTime" onChange={this.handleChangeCreateTime.bind(this)} value={defaultDate}/>
              <Checkbox onChange={this.handleChangeComplete.bind(this)} value={completed}>Completed</Checkbox>
            </div>
            <Button type="primary" onClick={() => this.handleSubmit(name, createTime, completed)}>Submit</Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({

});

export default Todolist;