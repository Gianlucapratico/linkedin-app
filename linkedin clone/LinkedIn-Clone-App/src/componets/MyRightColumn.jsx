import { Button, Card, Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { getUsersProfilesAction } from "../redux/actions";
import { useEffect } from "react";
import CardsAsideProfile from "../componets/CardsAsideProfile";


const MyRightColumn = () => {

      const dispatch = useDispatch();
      const usersProfiles = useSelector((state) => state.usersProfiles.content);
        console.log(usersProfiles);

        useEffect(() => {

        dispatch(getUsersProfilesAction());
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

    return (
      <Row>
        <Col>
          {/* prima card */}

          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="border-bottom p-3 text-center text-secondary fw-bold">
                Modifica il publico e L'URL
              </Card.Title>

              <Card.Title className="p-3 text-center text-secondary fw-bold">
                aggiungi il tuo profilo in un'altra lingua
              </Card.Title>
            </Card.Body>
          </Card>

          {/* seconda card */}

          <Card className="mb-3">
            <Card.Body>
              <Card.Text className="text-center text-secondary">
                <span>...</span>, unlock your full potential with LinkedIn
                Premium
              </Card.Text>
              <div className="d-flex justify-content-center">
                <img
                  className="me-2"
                  width="60px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                  alt="logo1"
                ></img>
                <img
                  className="ms-2"
                  width="60px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                  alt="logo1"
                ></img>
              </div>
              <Card.Text className="mt-2 text-center fs-6">
                See who's viewed your profile in the last 90 days
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button
                  className="rounded-pill ps-4 pe-4"
                  variant="outline-primary"
                >
                  Try it
                </Button>
              </div>
            </Card.Body>
          </Card>

          {/* terza card EFFETTUARE LA GET DI ALTRI PROFILI /profile CREARE STATO ARRY PROFILI, CILICLARE LE CARD STATICHE IN MODO TALE DA RENDERLE DINAMICHE */}
          {/* CREO UN LINK INTORN ALL'UTENTE ex "PIERO ROSSI"  CHE PORTI A /PROFILE CON ID DINAMICO IN PROFILE CREARE ID DINAMICO (CREARE UN ALTRO COMPONENTE || )*/}

          {/*MAPP*/}
          <Card className="mb-3 p-2">
            <Card.Body>
              <Card.Title className="fw-bold">
                Altri profili consultati
              </Card.Title>

              {usersProfiles.map((userProfile) => (
                <CardsAsideProfile
                  key={userProfile._id}
                  userProfile={userProfile}
                />
              ))}
            </Card.Body>
          </Card>

        {/* quarta card */}
{ /*
          <Card className="mb-3 p-2">
            <Card.Body>
              <Card.Title className="fw-bold fs-5">
                Persone che potresti conoscere
              </Card.Title>

              <Card.Text className="text-secondary fw-bold fs-6">
                Dalla tua scuola o Università
              </Card.Text>

              <Row className="mt-2 border-bottom">
                <Col xs={4}>
                  <img
                    width={"60px"}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                    alt="logo 2"
                  />
                </Col>
                <Col xs={8}>
                  <h3>Piero Rossi</h3>
                  <p className="fs-6">web developer student</p>
                </Col>
                <div className="d-flex justify-content-center">
                  <Button
                    className="rounded-pill ps-4 pe-4 mb-2"
                    variant="outline-dark"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-fill-add"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                      </svg>
                    </span>{" "}
                    Collegati
                  </Button>
                </div>
              </Row>
              <Row className="mt-2 border-bottom">
                <Col xs={4}>
                  <img
                    width={"60px"}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                    alt="logo 2"
                  />
                </Col>
                <Col xs={8}>
                  <h3>Daniele Di Pietro</h3>
                  <p className="fs-6">web developer student</p>
                </Col>
                <div className="d-flex justify-content-center">
                  <Button
                    className="rounded-pill ps-4 pe-4 mb-2"
                    variant="outline-dark"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-fill-add"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                      </svg>
                    </span>{" "}
                    Collegati
                  </Button>
                </div>
              </Row>
              <Row className="mt-2 border-bottom">
                <Col xs={4}>
                  <img
                    width={"60px"}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                    alt="logo 2"
                  />
                </Col>
                <Col xs={8}>
                  <h3>Gianni Rossi</h3>
                  <p className="fs-6">web developer student</p>
                </Col>
                <div className="d-flex justify-content-center">
                  <Button
                    className="rounded-pill ps-4 pe-4 mb-2"
                    variant="outline-dark"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-fill-add"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                      </svg>
                    </span>{" "}
                    Collegati
                  </Button>
                </div>
              </Row>
              <Row className="mt-2 border-bottom">
                <Col xs={4}>
                  <img
                    width={"60px"}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                    alt="logo 2"
                  />
                </Col>
                <Col xs={8}>
                  <h3>Andrea Rossi</h3>
                  <p className="fs-6">web developer student</p>
                </Col>
                <div className="d-flex justify-content-center">
                  <Button
                    className="rounded-pill ps-4 pe-4 mb-2"
                    variant="outline-dark"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-fill-add"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                      </svg>
                    </span>{" "}
                    Collegati
                  </Button>
                </div>
              </Row>
            </Card.Body>
          </Card>
*/}
          {/* quinta card */}

          <Card className="p-3 mb-2">
            <Card.Title className="fw-bold fs-5">
              Potrebbe interessarti
            </Card.Title>
            <Card.Text className="text-secondary fw-bold fs-6">
              Newsletter per te
            </Card.Text>
            <Row className="p-2">
              <Col xs={4}>
                <img
                  width={"70px"}
                  src="https://www.notiziegeopolitiche.net/wp-content/uploads/2022/07/B7D2DE22-66AA-4C8F-B08A-B33DA7604A8D.jpeg"
                  alt="logo 3"
                />
              </Col>
              <Col xs={8}>
                <h3>Must reads</h3>
                <p>web developer buisness</p>
                <div>
                  <img
                    width={"40px"}
                    src="https://www.notiziegeopolitiche.net/wp-content/uploads/2022/07/B7D2DE22-66AA-4C8F-B08A-B33DA7604A8D.jpeg"
                    alt="logo 3"
                  />
                  <span>EY</span>
                </div>
              </Col>
              <div className="d-flex justify-content-center mt-3">
                <Button
                  className="rounded-pill ps-4 pe-4 mb-2"
                  variant="outline-dark"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-plus-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                      />
                    </svg>
                  </span>{" "}
                  Collegati
                </Button>
              </div>
            </Row>
          </Card>
        </Col>
      </Row>
    );
}

export default MyRightColumn;