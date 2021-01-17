import React, { Component } from "react";
import { Container, Row, Col, Media, ListGroup, Card } from "react-bootstrap";
import JS from "../assets/JS.png";

export default class Blog extends Component {
  render() {
    return (
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col lg="9" md="12">
            <Media className="media__blog">
              <img
                width={150}
                height={150}
                alt="blog"
                className="mr-3"
                src={JS}
              />
              <Media.Body>
                <h5>Blog Post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  nobis fugiat modi illo veniam sed dolore animi voluptatum
                  obcaecati quod accusantium eaque dolorem, quis eos, accusamus
                  quidem dolores ratione excepturi eius nisi nulla laborum.
                  Ratione.
                </p>
              </Media.Body>
            </Media>
            <Media className="media__blog">
              <img
                width={150}
                height={150}
                alt="blog"
                className="mr-3"
                src={JS}
              />
              <Media.Body>
                <h5>Blog Post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  nobis fugiat modi illo veniam sed dolore animi voluptatum
                  obcaecati quod accusantium eaque dolorem, quis eos, accusamus
                  quidem dolores ratione excepturi eius nisi nulla laborum.
                  Ratione.
                </p>
              </Media.Body>
            </Media>
            <Media className="media__blog">
              <img
                width={150}
                height={150}
                alt="blog"
                className="mr-3"
                src={JS}
              />
              <Media.Body>
                <h5>Blog Post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  nobis fugiat modi illo veniam sed dolore animi voluptatum
                  obcaecati quod accusantium eaque dolorem, quis eos, accusamus
                  quidem dolores ratione excepturi eius nisi nulla laborum.
                  Ratione.
                </p>
              </Media.Body>
            </Media>
            <Media className="media__blog">
              <img
                width={150}
                height={150}
                alt="blog"
                className="mr-3"
                src={JS}
              />
              <Media.Body>
                <h5>Blog Post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  nobis fugiat modi illo veniam sed dolore animi voluptatum
                  obcaecati quod accusantium eaque dolorem, quis eos, accusamus
                  quidem dolores ratione excepturi eius nisi nulla laborum.
                  Ratione.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col lg="3" md={12}>
            <h5 className="mb-3 text-right">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>Side Widget</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  nobis fugiat modi illo veniam sed dolore animi voluptatum
                  obcaecati quod accusantium eaque dolorem, quis eos, accusamus
                  quidem dolores ratione.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
