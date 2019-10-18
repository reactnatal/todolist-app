import React, { Fragment } from 'react';
import TodoItem from '../../components/TodoItem/TodoItem';
import NewButton from '../../components/NewButton/NewButton';

const Todos = ({ todos }) => {
  return (
    <Fragment>
      <NewButton />
      {todos.map(todo => (
        <TodoItem text={todo.text} id={todo.id} key={todo.id} />
      ))}
    </Fragment>
  );
};

export default Todos;
