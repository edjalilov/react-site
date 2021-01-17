import React, { Component } from "react";
import {
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  Button,
} from "react-bootstrap";


export default class Contacts extends Component {
  render() {
    return (
      <Container>
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>Contact Us</h1>
        <Form className="contact__form">
          <FormGroup controlId="formBasicEmail">
            <FormLabel style={{ fontWeight: "bold" }}>Email address</FormLabel>
            <FormControl type="email" placeholder="Enter email"></FormControl>
            <FormText>We'll never share your email with anyone else</FormText>
          </FormGroup>

          <FormGroup controlId="formBasicText">
            <FormLabel style={{ fontWeight: "bold" }}>
              Example textarea
            </FormLabel>
            <FormControl
              as="textarea"
              rows="7"
              placeholder="Enter message"
            ></FormControl>
          </FormGroup>

          <FormGroup controlId="formBasicCheckbox">
            <FormCheck type="checkbox" label="Check me out"></FormCheck>
          </FormGroup>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
