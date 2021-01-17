import React, { Component } from "react";
import { Card, Col, CardDeck, Container } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <CarouselBox />
        <Container>
          <h1 className="text-center m-5">Our Team</h1>
          <CardDeck className="mb-5">
            <Col lg={3} md={6}>
              <Card>
                <Card.Img variant="top" src={team1} />
                <Card.Body>
                  <Card.Title className="card-team__title">
                    Developer
                  </Card.Title>
                  <Card.Text className="card-team__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora sit impedit recusandae!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card>
                <Card.Img variant="top" src={team2} />
                <Card.Body>
                  <Card.Title className="card-team__title">
                    Project Manager
                  </Card.Title>
                  <Card.Text className="card-team__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora sit impedit recusandae!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card>
                <Card.Img variant="top" src={team3} />
                <Card.Body>
                  <Card.Title className="card-team__title">Designer</Card.Title>
                  <Card.Text className="card-team__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora sit impedit recusandae!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card>
                <Card.Img variant="top" src={team4} />
                <Card.Body>
                  <Card.Title className="card-team__title">
                    Developer
                  </Card.Title>
                  <Card.Text className="card-team__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora sit impedit recusandae!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </CardDeck>
        </Container>
      </div>
    );
  }
}
