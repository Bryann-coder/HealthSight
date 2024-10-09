import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container
      fluid
      className="footer"
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#101010",
        color: "white",
        textAlign: "center",
        padding: "10px 0",
      }}
    >
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Movers and Shakers</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} HealthSight</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul
            className="footer-icons"
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <li className="social-icons" style={{ margin: "0 10px" }}>
              <a
                href="https://github.com/HealthSight"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={30} />
              </a>
            </li>
            <li className="social-icons" style={{ margin: "0 10px" }}>
              <a
                href="https://twitter.com/HealthSight"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter size={30} />
              </a>
            </li>
            <li className="social-icons" style={{ margin: "0 10px" }}>
              <a
                href="https://www.linkedin.com/in/HealthSight/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={30} />
              </a>
            </li>
            <li className="social-icons" style={{ margin: "0 10px" }}>
              <a
                href="https://www.instagram.com/HealthSight"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={30} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
