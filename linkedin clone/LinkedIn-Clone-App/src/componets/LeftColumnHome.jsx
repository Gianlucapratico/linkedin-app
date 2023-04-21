import { useEffect } from "react";
import avatar from "../assets/imgs/avatar.jpeg";
import banner from "../assets/imgs/banner.png";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfileAction } from "../redux/actions";

import { Col, Row, Card } from "react-bootstrap";

const LeftColumnHome = () => {
  const dispatch = useDispatch();
  const myprofile = useSelector((state) => state.myprofile.content);

  useEffect(() => {
    dispatch(getMyProfileAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: "400px",
          margin: "20px auto",
          marginTop: "0",
          borderRadius: "8px",
        }}
      >
        <div
          className=""
          style={{
            height: "30vh",
            width: "100%",
          }}
        >
          <Card.Img
            variant="top"
            className="img-fluid "
            src={banner}
            style={{
              height: "30vh",
              width: "100%",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
        </div>

        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", top: "-45px", left: "75px" }}>
            <img
              class="img-fluid bg-light p-1 me-3 d-flex align-items-center ms-3"
              src={avatar}
              width="75px"
              alt="avatar"
              style={{
                borderRadius: "500px",
              }}
            />{" "}
          </div>
          <Card.Title
            className="mt-3"
            style={{
              fontSize: "24px",
              fontWeight: "600",
              margin: "0",
              textAlign: "center",
            }}
          >
            {myprofile && (
              <>
                {myprofile.name}
                &nbsp;
                {myprofile.surname}
                <br />
                <span className="text-secondary fs-6">
                  ({myprofile.username})<br />
                </span>
              </>
            )}
          </Card.Title>
          <Card.Subtitle
            className="border-bottom "
            style={{
              fontSize: "18px",
              fontWeight: "400",

              margin: "10px 0 0",
              textAlign: "center",
            }}
          >
            {myprofile && <>{myprofile.bio}</>}
          </Card.Subtitle>
          <Card.Text
            style={{ fontSize: "16px", fontWeight: "400", margin: "20px 0 0" }}
          >
            collegamenti
          </Card.Text>
          <Card.Text
            className="border-bottom "
            style={{ fontSize: "16px", fontWeight: "400" }}
          >
            <strong>espandi la tua rete</strong>
          </Card.Text>
          <Card.Text
            className="border-bottom "
            style={{ fontSize: "16px", fontWeight: "400" }}
          >
            accedi a strumenti e informazioni in esclusiva
          </Card.Text>
          <Card.Text style={{ fontSize: "16px", fontWeight: "400" }}>
            <strong>i miei elementi</strong>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="mt-3"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: "400px",
          margin: "20px auto",
          borderRadius: "8px",
        }}
      >
        <Card.Body>
          <Card.Text style={{ fontSize: "16px", fontWeight: "400" }}>
            Gruppi
          </Card.Text>

          <Card.Text style={{ fontSize: "16px", fontWeight: "400" }}>
            Eventi
          </Card.Text>
          <Card.Text style={{ fontSize: "16px", fontWeight: "400" }}>
            Hashtag seguiti
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default LeftColumnHome;
