import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoInput from './TodoInput';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['shopping', 'cleaning'],
    };
  }
  
  addTodo = (newTodo) => {
console.log('z adtodo w glownym');
    // const { todos } = this.state;
    this.setState({todos: [newTodo, ...this.state.todos]});
  }

  removeTodo = (index) => {
    const newTodos = this.state.todos.filter((todo, i) => i!==index)
    console.log(newTodos);
    this.setState({todos: newTodos});
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>TODO LIST</h2>
        <TodoInput addTodo={this.addTodo}/>
      {todos.map((todo, i) => <div style={style.list} >
      {todo}
      <input type='button' value='remove todo' onClick={() => this.removeTodo(i)} />
      </div> )
      }
      <input type='button' onClick={this.addTodo} />
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
Todos.propTypes = {


};

export default Todos;

