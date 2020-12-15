import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, spacing, children }) => {
  return (
    <Alert className={spacing ? spacing : ''} variant={variant}>
      {children}
    </Alert>
  );
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
