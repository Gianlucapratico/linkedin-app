import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function MyFooter() {
  return (
    <Container fluid className=" parent-container mt-5 ms-0 me-auto text-secondary">
      <Row>
        <Col md={3}>
          <ul className="list-unstyled">
            <li>informazioni</li>
            <li>Community Guidelines</li>
            <li>Privacy &amp; Terms</li>
            <li>Sales Solutions</li>
            <li>centro sicurezza</li>
          </ul>
          <small>Linkedin Corporation © 2023</small>
        </Col>

        <Col md={3}>
          <ul className="list-unstyled">
            <li>accessibilità</li>
            <li>carriera</li>
            <li>Opzioni per gli annunci pubblicitari</li>
            <li>Mobile</li>
          </ul>
        </Col>
        <Col md={3}>
          <ul className="list-unstyled">
            <li>Talent Solutions</li>
            <li>Soluzioni di marketing</li>
            <li>Pubblicità</li>
            <li>piccole imprese</li>
          </ul>
        </Col>
        <Col md={3}>
          <div className="d-flex mb-2">
            <div className="me-2 ">
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
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 16.25A1.25 1.25 0 1113.25 17 1.25 1.25 0 0112 18.25zm1.41-5.46L13 13v1h-2v-2.21l1.49-.79C13.82 10.34 14 9.77 14 9.3c0-.78-.92-1.3-2.3-1.3A7.12 7.12 0 008 9.24V7a8 8 0 013.7-1c3 0 4.3 1.55 4.3 3.3a3.91 3.91 0 01-2.59 3.49z"></path>
              </svg>
            </div>
            <div>
              <p className="mb-0">Domande?</p>
              <small>visita il nostro centro assistenza</small>
            </div>
          </div>
          <div className="d-flex mb-2">
            <div className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match __web-inspector-hide-shortcut__"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z"></path>
              </svg>
            </div>
            <div>
              <p className="mb-0">Gestisci il tuo account e la tua privacy</p>
              <small>vai alle impostazioni</small>
            </div>
          </div>
          <div className="d-flex mb-2">
            <div className="me-2">
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
                <path d="M12 4.11V19.6l-3-2a9 9 0 01-4-7.49V6.44l7-2.33M12 2L3 5v5.11a11 11 0 004.9 9.16L12 22l4.1-2.73a11 11 0 004.9-9.16V5z"></path>
              </svg>
            </div>
            <div>
              <p className="mb-0">Trasparenza sui contenuti consigliati</p>
              <small>Scopri di più sui contenuti consigliati.</small>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
