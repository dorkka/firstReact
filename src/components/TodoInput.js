import React, { Component } from 'react';

class TodoInput extends Component {
  constructor() {
    super();
  }
  value = '';
setValue = (e) => {
  this.value = e.target.value
}
submitValue = () => {
  if (!this.value){
    return;
  }
  const {addTodo} = this.props;
  addTodo(this.value);
}
  render() {
    return (
      <div>
        <input type='text' placeholder='new todo' onChange={this.setValue} />
        <input type='button' value='add todo' onClick={this.submitValue}/>
        <input type='button' value='remove todo' onClick={this.submitValue}/>
      </div>
    );
  }
}

export default TodoInput;
