import React, { Component } from "react";
import {
  Container,
  Tab,
  Nav,
  NavItem,
  Col,
  Row,
  TabPane,
  NavLink,
} from "react-bootstrap";
import Design from "../assets/Design.jpg";
import Team from "../assets/Team.jpg";
import Programming from "../assets/Programming.jpg";
import Libraries from "../assets/Libraries.jpg";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="mt-5">
            <Col md={3}>
              <Nav bg="dark" variant="pills" className="flex-column mt-2">
                <NavItem>
                  <NavLink eventKey="first">Design</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="second">Team</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="third">Programming</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="fourth">Libraries</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md={9} className="tab-content">
              <Tab.Content>
                <TabPane eventKey="first">
                  <img src={Design} alt="Design" className="d-block w-100" tab-content__img/>
                </TabPane>
                <TabPane eventKey="second">
                  <img src={Team} alt="Team" className="d-block w-100" tab-content__img/>
                </TabPane>
                <TabPane eventKey="third">
                  <img
                    src={Programming}
                    alt="Programming"
                    className="d-block w-100" tab-content__img
                  />
                </TabPane>
                <TabPane eventKey="fourth">
                  <img
                    src={Libraries}
                    alt="Libraries"
                    className="d-block w-100"
                  />
                </TabPane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
