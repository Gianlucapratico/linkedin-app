import React, { useEffect } from "react";
import {
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Button,
} from "react-bootstrap";
import avatar from "../assets/imgs/avatar.jpeg";
import banner from "../assets/imgs/banner.png";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiFillYoutube, AiOutlinePlus } from "react-icons/ai";
import { BsFillCalendarDateFill, BsArrowClockwise } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import { BiWorld, BiLike, BiCommentDetail } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getPostsHomeAction } from "../redux/actions";
import CardPostsHome from "./CardPostsHome";

const CenterColumnHome = () => {

    const dispatch = useDispatch();
    const postsHome = useSelector((state) => state.postsHome.content);
    console.log(postsHome);

    useEffect(() => {
      dispatch(getPostsHomeAction());

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


  return (
    <Container className="mb-3" style={{ minHeight: "100vh" }}>
      <Card className="mb-3">
        <Card.Body className="p-4">
          <Row className="d-flex align-items-center justify-content-center ">
            <Col
              xs={2}
              className="d-flex align-items-center p-0 justify-content-center"
            >
              <img
                class="img-fluid bg-warning rounded-5 d-flex align-items-center p-0 m-0"
                src={avatar}
                width="75px"
                alt=""
                style={{ maxHeight: "75px" }}
              />{" "}
            </Col>
            <Col xs={10} className="p-0 m-0">
              <Form
                inline
                className="mt-2 me-auto d-flex align-items-center justify-content-center p-0 m-0 "
              >
                <FormControl
                  type="text"
                  placeholder="Avvia un post"
                  className="mr-sm-2 rounded rounded-pill fw-semibold"
                  style={{ height: "75px" }}
                />
              </Form>
            </Col>
          </Row>

          <Row className="row-cols-4">
            <Col className="">
              <Button className="w-100  mt-2 bg-light btn-secondary d-flex align-items-center">
                <HiOutlinePhotograph className="text-primary  fs-3"></HiOutlinePhotograph>
                <Card.Text className="fw-semibold text-dark ms-2">
                  Photo
                </Card.Text>
              </Button>
            </Col>

            <Col className="">
              <Button className="w-100  mt-2 bg-light btn-secondary d-flex align-items-center">
                <AiFillYoutube className="text-success fs-3"></AiFillYoutube>
                <Card.Text className="fw-semibold text-dark ms-2">
                  Video
                </Card.Text>
              </Button>
            </Col>

            <Col className="">
              <Button className="w-100  mt-2 bg-light btn-secondary d-flex align-items-center">
                <BsFillCalendarDateFill className="text-warning  fs-3"></BsFillCalendarDateFill>
                <Card.Text className="fw-semibold text-dark ms-2">
                  Event
                </Card.Text>
              </Button>
            </Col>

            <Col className="">
              <Button className="w-100 mt-2 bg-light btn-secondary d-flex align-items-center">
                <RiArticleLine className="text-danger  fs-3"></RiArticleLine>
                <Card.Text className="fw-semibold text-dark ms-2">
                  Write
                </Card.Text>
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* ----------- INIZIO CARD SINGOLA POST ---------------------   */}

      {postsHome.map((postHome) => (
        <CardPostsHome key={postHome._id} postHome={postHome} />
      ))}

      {/* ----------- Fine CARD SINGOLA POST ---------------------   */}
    </Container>
  );
};

export default CenterColumnHome;
