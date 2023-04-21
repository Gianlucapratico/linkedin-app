
import { Navbar, Nav, NavDropdown, Form, FormControl, Container, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../nav.css"
import { Link } from "react-router-dom";
import avatar from "../assets/imgs/avatar.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMyProfileAction } from "../redux/actions";

const MyNav = () => {
 
    //const myProfileId = useSelector((state) => state.myprofile.content._id);     

    return ( 
      <Container fluid className="p-0 mb-5">
        <Navbar
          className="navbar navbar-expand-md navbar-light bg-light d-flex justify-content-center align-items-center"
          expand="xl"
          style={{ backgroundColor: "#f3f2ef" }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
          <Navbar.Collapse
            className="text-center justify-content-center w-100"
            id="basic-navbar-nav"
            style={{ maxWidth: "1320px" }}
          >
            <div className="d-flex justify-content-between w-100">
              <Nav
                className="px-3 gap-1 d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <div className="d-flex ">
                  <Link to="/">
                    <div>
                      <img
                        className="me-3 mt-2 d-flex"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOoOprcahmPzt9dCelQhQuc5A2mQrVLyORg&usqp=CAU"
                        height="40px"
                        width="40px"
                        alt="LinkedIn"
                      />
                    </div>
                  </Link>
                  <Form inline className="mt-2 me-auto">
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="me-sm-2 d-flex "
                    />
                  </Form>
                </div>
                <Link
                  to="/"
                  className="text-decoration-none text-secondary mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginLeft: "20px",
                  }}
                >
                  
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        class="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                      </svg>
                    </span>
                    <span class="search">Home</span>
                  
                </Link>

                <Nav.Link
                  href="#my-network"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginLeft: "20px",
                  }}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                    </svg>
                  </span>
                  <span class="search">Rete</span>
                </Nav.Link>

                <Nav.Link
                  href="#my-network"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginLeft: "20px",
                  }}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                    </svg>
                  </span>
                  <span class="search">Lavoro</span>
                </Nav.Link>
                <Nav.Link
                  href="#my-network"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginLeft: "20px",
                  }}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                    </svg>
                  </span>
                  <span class="search">Messaggistica</span>
                </Nav.Link>
                <Nav.Link
                  href="#my-network"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginLeft: "20px",
                  }}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                    </svg>
                  </span>
                  <span class="search">Notifiche</span>
                </Nav.Link>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      class="img-fluid bg-warning rounded-5 mt-1 ms-3 d-flex align-items-center"
                      src={avatar}
                      width="25px"
                      alt=""
                      style={{ maxHeight: "25px" }}
                    />
                    <NavDropdown
                      title="Tu"
                      id="basic-nav-dropdown"
                      style={{ marginLeft: "20px" }}
                    >
                      <Link to={`/me`} className="text-decoration-none">
                        {" "}
                        <NavDropdown.Item href="#action/3.1">
                          My Profile
                        </NavDropdown.Item>
                      </Link>
                      <NavDropdown.Item href="#action/3.2">
                        Job
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.3">
                        Log out
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <NavDropdown
                    title="Per le aziende"
                    id="basic-nav-dropdown"
                    style={{ marginLeft: "20px" }}
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Settings & Privacy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Job</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
}

export default MyNav;
