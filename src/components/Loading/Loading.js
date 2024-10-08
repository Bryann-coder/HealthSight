import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Rapport.pdf";
import { AiOutlineDownload, AiOutlineUpload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Loading() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
  <Button
    variant="primary"
    style={{ maxWidth: "250px" }}
    onClick={() => document.getElementById('fileInput').click()} // Simule le clic sur l'input
  >
    <AiOutlineUpload />
    &nbsp; Charger le fichier
  </Button>
  <input
    id="fileInput"
    type="file"
    style={{ display: 'none' }} // Masque l'input
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        // Traitez le fichier ici, par exemple, en l'affichant ou en l'envoyant à votre serveur
        console.log(file);
      }
    }}
  />
</Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Telecharger le diagnostique
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Loading;
