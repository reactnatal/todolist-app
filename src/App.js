import React from 'react';

import Todos from './containers/Todos/Todos';
import NewTodo from './containers/NewTodo/NewTodo';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

import './App.scss';

const fakesTodos = [
  {
    id: 1,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    id: 2,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }
];

const App = () => (
  <div className="app">
    <h1>To do list</h1>
    <Todos todos={fakesTodos} />
    <NewTodo />
    <ErrorMessage />
  </div>
);

export default App;
