import React, { Fragment } from 'react';
import TodoItem from '../../components/TodoItem/TodoItem';
import NewButton from '../../components/NewButton/NewButton';

const Todos = () => {
  return (
    <Fragment>
      <NewButton />
      <TodoItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
      <TodoItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
    </Fragment>
  );
};

export default Todos;
