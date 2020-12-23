import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAdress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';
import Meta from '../components/Meta';
import useInput from '../hooks/useInput';

const ShippingScreen = ({ history }) => {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  const [addressProps] = useInput(shippingAddress.address);
  const [cityProps] = useInput(shippingAddress.city);
  const [postalCodeProps] = useInput(shippingAddress.postalCode);
  const [countryProps] = useInput(shippingAddress.country);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  });

  const submitHandler = e => {
    e.preventDefault();

    dispatch(
      saveShippingAdress({
        address: addressProps.value,
        city: cityProps.value,
        postalCode: postalCodeProps.value,
        country: countryProps.value,
      })
    );

    history.push('/payment');
  };

  return (
    <>
      <Meta title="Shipping Info" />
      <FormContainer>
        <CheckoutSteps step1 step2 />

        <h1 className="my-3">Shipping</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              autoComplete="off"
              {...addressProps}
            />
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              autoComplete="off"
              {...cityProps}
            />
          </Form.Group>
          <Form.Group controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter postal code"
              autoComplete="off"
              {...postalCodeProps}
            />
          </Form.Group>
          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter country"
              autoComplete="off"
              {...countryProps}
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default ShippingScreen;
