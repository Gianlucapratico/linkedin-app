import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiCommentDetail, BiLike, BiWorld } from 'react-icons/bi';
import { BsArrowClockwise } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import ultimaCena from "../assets/imgs/ultimacena.jpg";
const CardPostsHome = ({ postHome }) => {

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

  return (
    <>
      <Card className="mb-4">
        <div className="d-flex align-items-center mb-2">
          <div>
            <img
              class="img-fluid bg-light p-1 my-3 mx-3 d-flex align-items-center ms-3"
              src={postHome.user.image}
              width="80px"
              alt="avatar"
              style={{
                borderRadius: "500px",
              }}
            />{" "}
          </div>
          <div className="ps-4" style={{ width: "100%" }}>
            <Card.Title className="">
              <h2 className="fw-bold fs-5 d-flex">
                {postHome.username}
                <span className="text-secondary fs-6 d-flex align-items-center">
                  {" "}
                  &nbsp; 1°
                </span>
              </h2>
            </Card.Title>
            <Card.Title className="">
              <h2 className="fs-6 d-flex">
                <span className="text-secondary fs-6 d-flex align-items-center">
                  {" "}
                  {postHome.user.title}
                </span>
              </h2>
            </Card.Title>
            <Card.Title className="">
              <h2 className=" fs-6 d-flex">
                <span className="text-secondary fs-6 d-flex align-items-center">
                  {" "}
                  {new Date(postHome.updatedAt).toLocaleDateString("it-IT", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                  <BiWorld />
                </span>
              </h2>
            </Card.Title>
          </div>
          <div className="px-3">
            <Button className="w-100  mt-2 bg-light btn-secondary border border-none d-flex align-items-center">
              <AiOutlinePlus className="text-primary  fs-3"></AiOutlinePlus>
              <Card.Text className="fw-semibold text-primary ms-2">
                Segui
              </Card.Text>
            </Button>
          </div>
        </div>

        <div className="d-flex align-items-center ps-3 mb-2">
          <span className="text-dark fs-6 d-flex align-items-center">
            {postHome.text}
          </span>
        </div>
        <Row>
          <Col xs={12}>
            <Card.Img
              variant="top"
              className="img-fluid"
              src={ultimaCena}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                backgroundAttachment: "fixed",
              }}
            />
          </Col>
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center p-0"
          ></Col>
          <Col>
            <Card.Title className="fw-semibold px-3 my-3">
              <span className="text-dark fs-5 pe-2">
                {getRandomIntInclusive(1, 100)}
              </span>
              <BiLike className="text-secondary  fs-5"></BiLike>
            </Card.Title>
            <Card.Footer className="p-2">
              <Row className="row-cols-4 px-2">
                <Col className="">
                  <Button className="w-100  mt-2 bg-light btn-secondary border border-none d-flex align-items-center">
                    <BiLike className="text-secondary  fs-5"></BiLike>
                    <Card.Text className="fw-semibold text-dark ms-2 fs-6">
                      Consiglia
                    </Card.Text>
                  </Button>
                </Col>

                <Col className="">
                  <Button className="w-100  mt-2 bg-light btn-secondary border border-none d-flex align-items-center">
                    <BiCommentDetail className="text-secondary fs-5"></BiCommentDetail>
                    <Card.Text className="fw-semibold text-dark ms-2 fs-6">
                      Commenta
                    </Card.Text>
                  </Button>
                </Col>

                <Col className="">
                  <Button className="w-100  mt-2 bg-light btn-secondary border border-none d-flex align-items-center">
                    <BsArrowClockwise className="text-secondary  fs-5"></BsArrowClockwise>
                    <Card.Text className="fw-semibold text-dark ms-2 fs-6">
                      Share
                    </Card.Text>
                  </Button>
                </Col>

                <Col className="">
                  <Button className="w-100 mt-2 bg-light btn-secondary border border-none d-flex align-items-center">
                    <FiSend className="text-secondary  fs-5"></FiSend>
                    <Card.Text className="fw-semibold text-dark ms-2 fs-6">
                      Invia
                    </Card.Text>
                  </Button>
                </Col>
              </Row>
            </Card.Footer>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CardPostsHome