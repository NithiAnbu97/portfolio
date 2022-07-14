import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by NithiAnbu</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} NA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nithiyanantham-s-a-5785251b9/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li> 
            <li className="social-icons">
              <a
                href="https://github.com/NithiAnbu97"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100010067958477"
                style={{ color: "white" }}
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/nithianbu2509/"
                style={{ color: "white" }}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Design Template by{" "}
        <a
          href="https://github.com/NithiAnbu97/portfolio"
          style={{ color: "white" }}
        >
          Nithi Anbu
        </a>{" "}
      </h1>
    </Container>
  );
}

export default Footer;
