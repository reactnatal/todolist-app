import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import './Button.scss';

const GreyButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(grey[300]),
    backgroundColor: grey[300],
    '&:hover': {
      backgroundColor: grey[500]
    }
  }
}))(Button);

const ButtonGeneric = ({ text, Icon }) => {
  return (
    <div className="button">
      <GreyButton variant="contained" color="primary" startIcon={<Icon />}>
        {text}
      </GreyButton>
    </div>
  );
};

export default ButtonGeneric;
