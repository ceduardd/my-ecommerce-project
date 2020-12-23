import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SearchBox = () => {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className="my-2 my-lg-0">
      <Form.Control
        type="text"
        name="q"
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search Products..."
      ></Form.Control>
      <Button
        type="submit"
        variant="outline-primary"
        className="ml-sm-2 mt-2 mt-sm-0"
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
