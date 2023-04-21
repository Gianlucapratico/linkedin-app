import React, { useEffect, useState } from "react";
import "../App.css";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Form,
    Modal,
} from "react-bootstrap";
import avatar from "../assets/imgs/avatar.jpeg";
import banner from "../assets/imgs/banner.png";

import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
//import { Link } from "react-router-dom";
import MyRightColumn from "./MyRightColumn";
import MyNav from "../componets/MyNav";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfileAction } from "../redux/actions";
import MyFooter from "./MyFooter";
import CardExperience from "./CardExperience";


const MainSectionProfile = () => {
  // ------- TOASTS DA ELIMINARE --------- //
  /*
    const [showB, setShowB] = useState(true);
    const toggleShowB = () => setShowB(!showB);
    */
  // ---------- MODAL -------------------- //
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const handleClose = () => setShowModal1(false);
  const handleShow = () => setShowModal1(true);
  const handleClose2 = () => {
    setShowModal2(false);
    setSelectedId2("")
  };
  const handleShow2 = () => setShowModal2(true);


  const dispatch = useDispatch();
  const myprofile = useSelector((state) => state.myprofile.content);
  console.log("MYPROFILE", myprofile)
  const [experiences, setExperiences] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedId2, setSelectedId2] = useState("");
  
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");



  /* const getMyProfile = async () => {
    
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me"
    const HEADERS = {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYjJiNGZjYTEyOTAwMTQ0MGMxMjgiLCJpYXQiOjE2ODE4MzA1ODAsImV4cCI6MTY4MzA0MDE4MH0.EKYvZyonyyZC0G9tFGBdG9x5BCVv-x5GpoR3THNG6AY"
        }

    }
        try{
            const response = await fetch(baseEndpoint, HEADERS)
            if(response.ok) {
            const oggetto = await response.json();
            setMyProfile(oggetto)
            console.log(myProfile)
            } else {
                alert("Error fetching results");
            }

        } catch (error) {
            console.log(error);
        }

   }


*/
  useEffect(() => {
    /*

    if(){

    }
    */
    dispatch(getMyProfileAction());
    getExperiences()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getExperiences = async () => {
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${myprofile._id}/experiences`;
    const HEADERS = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYjJiNGZjYTEyOTAwMTQ0MGMxMjgiLCJpYXQiOjE2ODE4MzA1ODAsImV4cCI6MTY4MzA0MDE4MH0.EKYvZyonyyZC0G9tFGBdG9x5BCVv-x5GpoR3THNG6AY",
      },
    };
    try {
      const response = await fetch(baseEndpoint, HEADERS);
      if (response.ok) {
        const arr = await response.json();
        setExperiences(arr);
        console.log("ARRAY" , arr);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

   const postExperiences = async () => {
     const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${myprofile._id}/experiences`;
     const URL = selectedId ? `${baseEndpoint}/${selectedId}` : baseEndpoint
     const formValues = {
       role,
       company,
       startDate,
       endDate,
       description,
       area,
      };



     const OPT = {
        method: selectedId ? "PUT" : "POST",
        body: JSON.stringify(formValues),
        headers: {
         "Content-Type": "application/json; charset=utf-8",
         Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYjJiNGZjYTEyOTAwMTQ0MGMxMjgiLCJpYXQiOjE2ODE4MzA1ODAsImV4cCI6MTY4MzA0MDE4MH0.EKYvZyonyyZC0G9tFGBdG9x5BCVv-x5GpoR3THNG6AY",
          },
     };
     try {
       const response = await fetch(URL, OPT);
       if (response.ok) {
         const arr = await response.json();
          getExperiences();
          getExperiences(setExperiences(arr));
         console.log("ARRAY", arr);
       } else {
         console.log("Error 'POST/PUT' fetching results");
       }
     } catch (error) {
       console.log(error);
     }
   }; 

   const experienceDelete = async () => {
        const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${myprofile._id}/experiences/${selectedId}`;
        const HEADERS = {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYjJiNGZjYTEyOTAwMTQ0MGMxMjgiLCJpYXQiOjE2ODE4MzA1ODAsImV4cCI6MTY4MzA0MDE4MH0.EKYvZyonyyZC0G9tFGBdG9x5BCVv-x5GpoR3THNG6AY",
          },
        };
        try {
          const response = await fetch(baseEndpoint, HEADERS);
          if (response.ok) {
            getExperiences();
          } else {
           console.log("Error 'DELETE' fetching results");
          }
        } catch (error) {
          console.log(error);
        }

   }

     useEffect(() => {
      if(selectedId || selectedId2) {
        const currentExp = experiences.find(experience => experience._id === selectedId)
        setRole(currentExp.role);
        setCompany(currentExp.company);
        setStartDate(currentExp.startDate);
        setEndDate(currentExp.endDate);
        setDescription(currentExp.description);
        setArea(currentExp.area);
      } else {
        setRole("");
        setCompany("");
        setStartDate("");
        setEndDate("");
        setDescription("");
        setArea("");
      }

      
     }, [selectedId, selectedId2]);
  


  return (
    <>
      <Container
        fluid
        className="p-xs-0 p-sm-0 p-0"
        style={{ minHeight: "100vh", backgroundColor: "#f3f2ef" }}
      >
        {myprofile && (
          <>
            <MyNav _id={`${myprofile._id}`} />
          </>
        )}

        <Container>
          <Row className="">
            <Col xs={12} sm={12} md={8} lg={8} xl={8} className="me-auto my-3">
              <Card>
                <Card.Img
                  variant="top"
                  className="img-fluid"
                  src={banner}
                  style={{
                    height: "30vh",
                    width: "100%",
                    objectFit: "cover",
                    backgroundAttachment: "fixed",
                  }}
                />
                <span
                  className="bg-light p-1 fs-5 me-3 mt-3"
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    borderRadius: "20px",
                  }}
                >
                  <BiPencil className="fs-3" style={{ paddingBottom: "2px" }} />
                </span>
                <Card.Body
                  border="dark"
                  className="p-3 pt-5"
                  style={{ position: "relative" }}
                >
                  <div>
                    <div className="">
                      <div style={{ position: "absolute", top: "-80px" }}>
                        <img
                          class="img-fluid bg-light p-1 me-3 d-flex align-items-center ms-3"
                          src={avatar}
                          width="150px"
                          alt="avatar"
                          style={{
                            borderRadius: "500px",
                          }}
                        />{" "}
                      </div>
                    </div>
                    <div className="d-flex justify-content-end me-3">
                      <Button
                        className="btn-light bg-light rounded rounded-5 border  fs-5"
                        style={{ borderRadius: "" }}
                        //onClick={handleShow}
                      >
                        <BiPencil />
                      </Button>

                      <Modal
                        size="lg"
                        show={showModal1}
                        onHide={handleClose}
                        aria-labelledby="example-modal-sizes-title-lg"
                        id="experienceForm"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="example-modal-sizes-title-lg">
                            Modifica introduzione
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Name / Role:</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Your Name"
                                autoFocus
                                onChange={(e) => setRole(e.target.value)}
                                value={role}
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Company:</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Your Surname"
                                autoFocus
                                onChange={(e) => setCompany(e.target.value)}
                                value={company}
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Start Experience:</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Your Country"
                                autoFocus
                                onChange={(e) => setStartDate(e.target.value)}
                                value={startDate}
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>End experience:</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="End Date"
                                autoFocus
                                onChange={(e) => setEndDate(e.target.value)}
                                value={endDate}
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Description of job</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Set your Description"
                                autoFocus
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Area, your Location</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Set your Area"
                                autoFocus
                                onChange={(e) => setArea(e.target.value)}
                                value={area}
                              />
                            </Form.Group>
                            {/*
                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>Password</Form.Label>
                                  <Form.Control
                                    type="password"
                                    placeholder='Enter a password that is not "Sgamabile"'
                                    autoFocus
                                  />
                                </Form.Group>
                        */}

                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>Description | Bio</Form.Label>
                              <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="primary rounded rounded-pill"
                            onClick={() => {
                              handleClose();
                              postExperiences();
                            }}
                          >
                            {selectedId ? "Modifica" : "Salva"}
                          </Button>
                          {selectedId && (
                            <Button
                              variant="danger rounded rounded-pill"
                              onClick={() => {
                                handleClose();
                                experienceDelete();
                              }}
                            >
                              Elimina
                            </Button>
                          )}
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>

                  {/*---------ADD NEW EXPERIENCE------------*/}

                  <Modal
                    size="lg"
                    show={showModal2}
                    onHide={handleClose2}
                    aria-labelledby="example-modal-sizes-title-lg"
                    id="experienceForm"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-lg">
                        Modifica introduzione
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Name / Role:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Your Name"
                            autoFocus
                            onChange={(e) => setRole(e.target.value)}
                            value={role}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Company:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Your Surname"
                            autoFocus
                            onChange={(e) => setCompany(e.target.value)}
                            value={company}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Start Experience:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Your Country"
                            autoFocus
                            onChange={(e) => setStartDate(e.target.value)}
                            value={startDate}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>End experience:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="End Date"
                            autoFocus
                            onChange={(e) => setEndDate(e.target.value)}
                            value={endDate}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Description of job</Form.Label>
                          <Form.Control
                            type="textarea"
                            placeholder="Set your Description"
                            autoFocus
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Area, your Location</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Set your Area"
                            autoFocus
                            onChange={(e) => setArea(e.target.value)}
                            value={area}
                          />
                        </Form.Group>
                        {/*
                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>Password</Form.Label>
                                  <Form.Control
                                    type="password"
                                    placeholder='Enter a password that is not "Sgamabile"'
                                    autoFocus
                                  />
                                </Form.Group>
                        */}
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="primary rounded rounded-pill"
                        onClick={() => {
                          handleClose2();
                          postExperiences();
                        }}
                      >
                        {selectedId2 ? "Modifica" : "Add"}
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Card.Title className="">
                    <h2 className="fw-bold fs-4 d-flex ">
                      {myprofile && (
                        <>
                          {myprofile.name}&nbsp;
                          {myprofile.surname}
                        </>
                      )}
                      <span className="text-secondary fs-6 d-flex align-items-center">
                        {" "}
                        &nbsp; {myprofile && <>({myprofile.username})</>}
                      </span>
                    </h2>
                  </Card.Title>
                  <Row>
                    <Col xs={8} lg={9}>
                      <Card.Text>{myprofile && <>{myprofile.bio}</>}</Card.Text>
                      <span className="text-secondary fs-6 d-flex align-items-center d-flex">
                        {" "}
                        {myprofile && <>{myprofile.area}</>}
                        <Card.Link
                          href="#"
                          className="d-flex ps-2 text-primary fw-semibold text-decoration-none"
                        >
                          Informazioni di contatto
                        </Card.Link>
                      </span>
                      <Card.Link
                        href="#"
                        className="d-flex pt-2 text-primary fw-semibold text-decoration-none"
                      >
                        (N) collegamenti
                      </Card.Link>
                      <div className="pt-3">
                        <Button variant="primary rounded rounded-pill py-1 px-3 me-3 fw-semibold">
                          Disponibile per
                        </Button>
                        <Button variant="outline-primary rounded rounded-pill py-1 px-3 me-3 fw-semibold">
                          Aggiungi sezione al profilo
                        </Button>
                        <Button variant="outline-secondary rounded rounded-pill py-1 px-3 fw-semibold">
                          Altro
                        </Button>
                      </div>
                    </Col>
                    <Col
                      xs={4}
                      lg={2}
                      className="d-flex flex-wrap me-auto p-0 justify-content-center d-none d-md-flex"
                      style={{ maxHeight: "150px" }}
                    >
                      <div
                        className="mb-3 d-flex"
                        style={{ maxHeight: "35px" }}
                      >
                        <img
                          class="img-fluid bg-warning rounded-5 me-3 d-flex align-items-center"
                          src={avatar}
                          width="35px"
                          alt=""
                          style={{ maxHeight: "35px" }}
                        />{" "}
                        <span class="ps-1 fs-6 text-dark fw-semibold  d-flex align-items-center">
                          WebDev
                        </span>
                      </div>
                      <div
                        className="mb-3 d-flex"
                        style={{ maxHeight: "35px" }}
                      >
                        <img
                          class="img-fluid bg-warning rounded-5 me-3 d-flex align-items-center"
                          src={avatar}
                          width="35px"
                          style={{ maxHeight: "35px" }}
                          alt=""
                        />{" "}
                        <span class="ps-1 fs-6 text-dark fw-semibold d-flex align-items-center">
                          Zappatore
                        </span>
                      </div>
                    </Col>

                    {/*<div>
                    <Row className="row-cols-2">
                      <Col>
                        <div className="mt-3 me-2 d-flex justify-content-end">
                          <Toast
                            onClose={toggleShowB}
                            show={showB}
                            animation={false}
                            className="rounded rounded-1 bg-primary"
                          >
                            <Toast.Header className="rounded rounded-1 ">
                              <Toast.Body className="rounded rounded-1 ">
                                <strong>Disponibile a lavorare</strong> <br />
                                (LAVORO DINAMICO) <br />
                                <Card.Link className="text-primary text-decoration-none fw-semibold">
                                  Mostra dettagli
                                </Card.Link>
                              </Toast.Body>
                              COMMENTTATO IL BUTTON
                              {/*<Button
                          onClick={toggleShowB}
                          className="mb-2 bg-light border-none border"
                        >
                          ✖
                        </Button>**}
                            </Toast.Header>
                          </Toast>
                        </div>
                      </Col>
                      <Col>
                        <div className="mt-3 me-2 d-flex justify-content-end">
                          <Toast
                            onClose={toggleShowB}
                            show={showB}
                            animation={false}
                            className="rounded rounded-3"
                          >
                            <Toast.Header className="rounded rounded-4">
                              <Toast.Body className="rounded rounded-4">
                                <strong>Metti in risalto i servizi</strong> che
                                offri, così tu e la tua azienda potrete apparire
                                nei risultati di ricerca. <br />
                                <Card.Link className="text-primary text-decoration-none fw-semibold">
                                  Inizia
                                </Card.Link>
                              </Toast.Body>
                              {/*<Button
                          onClick={toggleShowB}
                          className="mb-2 bg-light border-none border"
                        >
                          ✖
                        </Button>
                            </Toast.Header>
                          </Toast>
                        </div>
                      </Col>
                    </Row>
                  </div>*/}
                  </Row>
                </Card.Body>
              </Card>

              <Card className="mt-3">
                <Card.Body className="p-4">
                  <Card.Title className="fw-semibold  mb-0">Risorse</Card.Title>
                  <span className="">
                    <BsEyeFill /> &nbsp;solo per te
                  </span>
                  <Row>
                    <Col
                      xs={1}
                      className="d-flex align-items-center justify-content-center p-0"
                    >
                      <MdOutlineSettingsInputAntenna className="fs-3 text-center" />
                    </Col>
                    <Col>
                      <Card.Title className="fw-semibold  mt-3 mb-0">
                        Modalità creazione di contenuti
                      </Card.Title>
                      <Card.Text className="">
                        Fatti scoprire, metti in risalto i contenuti sul tuo
                        profilo e accedi agli strumenti di creazione
                      </Card.Text>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col
                      xs={1}
                      className="d-flex align-items-center justify-content-center p-0"
                    >
                      <FaUserFriends className="fs-3 text-center" />
                    </Col>
                    <Col>
                      <Card.Title className="fw-semibold  mb-0">
                        La mia rete
                      </Card.Title>
                      <Card.Text>
                        Salva e gestisci i tuoi collegamenti e interessi.
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>

                <Card.Footer className="text-muted text-center">
                  Mostra tutte le risorse (N) ➜{" "}
                </Card.Footer>
              </Card>
              {experiences.map((experience) => (
                <CardExperience
                  key={experience._id}
                  experience={experience}
                  newExperience={experience}
                  setId={setSelectedId}
                  setIdEmpty={setSelectedId2}
                  modalShow={handleShow}
                  modalShowAdd={handleShow2}
                />
              ))}

              {/*           <Card className="mt-3">
                <Card.Body className="p-4">
                  <Card.Title className="fw-semibold  mb-0">
                    Licenze e certificazioni
                  </Card.Title>

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
                    <Col>
                      <Card.Title className="fw-semibold  mt-3 mb-0">
                        (TITOLO FORMAZIONE)
                      </Card.Title>
                      <Card.Text className="mb-0">(NOME)</Card.Text>
                      <Card.Text className="mb-0">(ORGAZNIZZAZIONE)</Card.Text>
                      <Card.Text className="mb-0">(DATA DI RILASCIO)</Card.Text>
                      <Card.Text className="mb-0">(ID CREDENZIALE)</Card.Text>
                      <Card.Text className="mb-0">(COMPETENZE)</Card.Text>
                    </Col>
                  </Row>
                  <hr />
                </Card.Body>
              </Card>*/}
            </Col>
            <Col className="my-3" xs={12} sm={12} md={4} lg={4} xl={4}>
              <MyRightColumn />
            </Col>
            <MyFooter />
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default MainSectionProfile;
