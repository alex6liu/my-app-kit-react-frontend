import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, getOneTodo, postTodo, changeTodo, deleteTodo } from '../../actions/todolistAction'
import Header from '../Header';
import './index.scss';

class Todolist extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTodos());
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="todolist_main-container">
          <h1>This is my Todolist</h1>

        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Todolist);