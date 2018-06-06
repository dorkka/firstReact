import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
// import TodosSimple from './components/TodosSimple';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos/>
      </div>
    );
  }
}

export default App;
