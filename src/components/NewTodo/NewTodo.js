import React from 'react';
import Input from '@material-ui/core/Input';

import SaveButton from '../SaveButton/SaveButton';

import './NewTodo.scss';

const NewTodo = () => (
  <div className="new-todo">
    <p className="new-todo__title">What do you want do to?</p>
    <Input fullWidth className="new-todo__input" />
    <SaveButton />
  </div>
);

export default NewTodo;
