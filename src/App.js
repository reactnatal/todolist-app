import React from 'react';

import Todos from './containers/Todos/Todos';
import NewTodo from './components/NewTodo/NewTodo';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

import './App.scss';

const App = () => (
  <div className="app">
    <h1>To do list</h1>
    <Todos />
    <NewTodo />
    <ErrorMessage />
  </div>
);

export default App;
