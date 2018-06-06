import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoInput from './TodoInput';

class TodosSimple extends Component {
  constructor() {
    super();
    this.state = {
      todos: ['shopping', 'cleaning'],
    };
  }
  value = '';
  
  addTodo = () => {
    const newTodo = this.value;
    if (!newTodo){
      return;
    }
    this.setState({todos: [newTodo, ...this.state.todos]});
  }

  setValue = (e) => {
    this.value = e.target.value
  }

  removeTodo = () => {
    this.state.todos.filter
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>TODO LIST</h2>
        <input type='text' placeholder='new todo' onChange={this.setValue} />
        <input type='button' value='add todo' onClick={this.addTodo}/>
      {todos.map((todo) => <div style={style.list} >
      {todo}
      <input type='button' value='remove todo' onClick={this.submitValue}/>
      </div> )}
      </div>
    );
  }
}

const style = {
  list: {
    border: '1px solid red', 
    width: '200px',
    margin: 'auto',
  }
}

export default TodosSimple;
