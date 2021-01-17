import React, { Component } from "react";
import {
  Button,
  Container,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  Form,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Logo from "../assets/logo192.png";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from '../Pages/Home.jsx';
import About from '../Pages/About.jsx';
import Contacts from '../Pages/Contacts.jsx';
import Blog from '../Pages/Blog.jsx';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <NavbarBrand>
              <img
                src={Logo}
                alt="Logo"
                height="30"
                width="30"
                className="d-inline-block align-top mr-2"
              />
              React Site
            </NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About Us</NavLink>
                <NavLink href="/contacts">Contacts</NavLink>
                <NavLink href="/blog">Blog</NavLink>
              </Nav>
              <Form inline>
                <FormControl 
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 nav-search"
                />
                <Button variant="outline-info" className="btn-search">Search</Button>
              </Form>
            </NavbarCollapse>
          </Container>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Router>
      </div>
    );
  }
}
