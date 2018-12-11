import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, getOneTodo, postTodo, changeTodo, deleteTodo } from '../../actions/todolistAction'
import Header from '../Header';
import './index.scss';
import { todolistUrl } from '../../apiUrl';

class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    fetch(todolistUrl)
      .then(res => res.json())
      .then(myjson => this.setState({todos: myjson}))
  }

  handleCompleted(id) {
    fetch(todolistUrl+`/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "completed": true,
      }),
    })

  }

  render() {
    const { todos } = this.state;

    const items =[];
    for (let i = 0; i < todos.length; i++) {
        items.push(
            <tr>
                <td>
                  {todos[i]._id}
                </td>
                <td>
                  {todos[i].name}
                </td>
                <td>{todos[i].createTime}</td>
                <td>{todos[i].completed ? 'Yes' : 'No'}</td>
                <td>
                  <button disabled={todos[i].completed ? true : false} onClick={() => this.handleCompleted(todos[i]._id)}>Completed</button>
                </td>
                <td>
                  <button onClick={this.handleDelete}>Detele</button>
                </td>
            </tr>
        );
    }
    return (
      <React.Fragment>
        <Header/>
        <div className="todolist_main-container">
          <h1>
            This is my Todolist
          </h1>
          <table border="1" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Created Time</td>
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

const mapStateToProps = state => ({

});

export default Todolist;