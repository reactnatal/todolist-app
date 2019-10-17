import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

import './TodoItem.scss';

const TodoItem = ({ text }) => {
  return (
    <div className="todo-item">
      <Checkbox />
      <p>{text}</p>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default TodoItem;
