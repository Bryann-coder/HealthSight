import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import InscriptionCard from "./InscriptionCards";

function Inscription(){
    return(
      <Container fluid className="about-section">
        <Particle/>
        <Container>
        <h1 className="project-heading">
          <strong className="purple">Inscription</strong>
        </h1>
        <InscriptionCard/>
        </Container>
      </Container>
    );
}

export default Inscription;