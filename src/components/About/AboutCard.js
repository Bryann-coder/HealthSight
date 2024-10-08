import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour Nous sommmes <span className="purple"> HealthSight </span>
            actuellement au <span className="purple"> Cameroun.</span>
            <br />
            Nous formons une equipe d'ingenieurs informatiques axes sur la sante
            <br />
            <br />
            <br />
            Apres la cardiologie les dommaines auquel nous nous interresons sont :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Analyse neuronale
            </li>
            <li className="about-activity">
              <ImPointRight /> Ophtamologie
            </li>
            <li className="about-activity">
              <ImPointRight /> Le systeme muscolo-squeletique
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "WITH HEALTHSIGHT, WE MOVE AND SHAKE"{" "}
          </p>
          <footer className="blockquote-footer">Movers and Shakers</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
