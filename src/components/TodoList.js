import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
  render() {
    return (
      <div>
      <div style={style.list} >
      <input type='button'  value='remove todo'  onClick={this.addTodo} />
      </div>
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

TodoList.propTypes = {

};

export default TodoList;
