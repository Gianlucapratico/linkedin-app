import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function RightColumnHome() {

  

  return (
    <Card className="mb-3 p-2">
      <Card.Body>
        <Row>
          <h3>Linkedin Notizie</h3>
          <Col xs={8} className="mb-2 w-100">
            <p className="mb-0 fw-bold">
              • Le Top Companies del 2023 in Italia
            </p>
            <small>Notizie principali 534 lettori</small>
          </Col>
        </Row>
        <Row>
          <Col xs={8} className="mb-2 w-100">
            <p className="mb-0 fw-bold">
              • Le Top Companies del 2023 in Italia
            </p>
            <small>Notizie principali 534 lettori</small>
          </Col>
        </Row>
        <Row>
          <Col xs={8} className="mb-2 w-100">
            <p className="mb-0 fw-bold">
              • Le Top Companies del 2023 in Italia
            </p>
            <small>Notizie principali 534 lettori</small>
          </Col>
        </Row>
        <Row>
          <Col xs={8} className="mb-2 w-100">
            <p className="mb-0 fw-bold">
              • Le Top Companies del 2023 in Italia
            </p>
            <small>Notizie principali 534 lettori</small>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default RightColumnHome;
