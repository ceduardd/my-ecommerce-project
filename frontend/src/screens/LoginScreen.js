import React, { useEffect } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FormContainer from '../components/FormContainer';
import useInput from '../hooks/useInput';

import { login } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const LoginScreen = ({ location, history }) => {
  const [emailProps] = useInput('');
  const [passwordProps] = useInput('');

  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector(state => state.userLogin);

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(emailProps.value, passwordProps.value));
  };

  return (
    <FormContainer>
      <h1 className="my-3">Sign In</h1>

      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader spacing="mb-3" />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoComplete="off"
            {...emailProps}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            autoComplete="off"
            {...passwordProps}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>

      <Row>
        <Col className="py-3">
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
