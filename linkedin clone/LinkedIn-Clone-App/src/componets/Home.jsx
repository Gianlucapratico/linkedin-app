import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import RightColumnHome from "./RightColumnHome";
import CenterColumnHome from "./CenterColumnHome";
import MyNav from "../componets/MyNav";
import MyFooter from "./MyFooter";
import LeftColumnHome from "./LeftColumnHome";
import { useDispatch } from "react-redux";
import { getMyProfileAction } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  

    useEffect(() => {
    //
    dispatch(getMyProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      fluid
      className="p-3 p-sm-0"
      style={{ minHeight: "100vh", backgroundColor: "#f3f2ef" }}
    >
      <MyNav />
      <Row className="mt-1 p-4 pt-0">
        <Col xs={12} sm={12} md={12} lg={3} xl={3}>
          <LeftColumnHome />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <CenterColumnHome />
        </Col>
        <Col xs={12} sm={12} md={12} lg={3} xl={3}>
          <RightColumnHome />
        </Col>
        <MyFooter />
      </Row>
    </Container>
  );
};

export default Home;
