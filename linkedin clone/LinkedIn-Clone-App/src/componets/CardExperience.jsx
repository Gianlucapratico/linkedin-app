import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';

import avatar from "../assets/imgs/avatar.jpeg";
import { BiPencil } from 'react-icons/bi';
import { AiOutlinePlus } from "react-icons/ai";

const CardExperience = ({ experience, setId, modalShow, setIdEmpty , modalShowAdd }) => {
  return (
    <>
      <Card className="mt-3">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-end ">
            <Card.Title className="fw-semibold d-flex align-items-center me-auto mb-0">
              Experiences
            </Card.Title>
            <div className='className="d-flex justify-content-end align-items-center"'>
              <Button
                className="btn-light bg-light rounded rounded-5 border fs-5"
                style={{}}
                onClick={() => {
                  modalShowAdd();
                }}
              >
                <AiOutlinePlus className="pb-1" />
              </Button>
            </div>
          </div>
          <Row>
            <Col
              xs={1}
              className="d-flex align-items-center justify-content-center p-0"
              style={{ maxHeight: "85px" }}
            >
              <img
                class="img-fluid bg-warning rounded-5 ms-1 d-flex align-items-center"
                src={avatar}
                width="35px"
                alt=""
                style={{ maxHeight: "35px" }}
              />{" "}
            </Col>
            <Col className="mt-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex justify-content-start align-items-center">
                  <Card.Title className="fw-semibold d-flex justify-content-start  mb-0">
                    {experience.role}
                  </Card.Title>
                </div>
                <div className='className="d-flex justify-content-end align-items-center"'>
                  <Button
                    className="btn-light bg-light rounded rounded-5 border  fs-5"
                    style={{}}
                    onClick={() => {
                      modalShow();

                      setId(experience._id);
                      
                    }}
                  >
                    <BiPencil className="pb-1" />
                  </Button>
                </div>
              </div>
              <Card.Text className="mb-0">
                <strong>{experience.company}</strong>
              </Card.Text>
              <Card.Text className="mb-0">{experience.description}</Card.Text>

              <Card.Text className="mb-0">
                <strong>Data di inizio: </strong>{" "}
                {new Date(experience.startDate).toDateString()}
              </Card.Text>
              <Card.Text className="mb-0">
                <strong>Data di fine: </strong>{" "}
                {new Date(experience.endDate).toDateString()}
              </Card.Text>
              <Card.Text className="mb-0">Area: {experience.area}</Card.Text>
            </Col>
          </Row>
          <hr />
        </Card.Body>
      </Card>
    </>
  );
};

export default CardExperience