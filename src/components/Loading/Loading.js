import React, { useState, useEffect } from "react";
import { Container, FormSelect, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Rapport.pdf";
import { AiOutlineDownload, AiOutlineUpload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Loading() {
  const [width, setWidth] = useState(1200);
  const [loading, setLoading] = useState(false); // Ajout de l'état de chargement
  const [fileUploaded, setFileUploaded] = useState(false); // Pour simuler le fichier uploadé

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Fonction pour simuler le traitement après upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true); // Début du chargement
      setFileUploaded(true);

      setTimeout(() => {
        setLoading(false); //Simulation du traitement 
      }, 5000);
    }
  };


  const handleDownloadClick = () => {
    window.open(pdf, "_blank"); // Ouvre le PDF dans un nouvel onglet
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            style={{ maxWidth: "250px" }}
            onClick={() => document.getElementById("fileInput").click()} // Simule le clic sur l'input
          >
            <AiOutlineUpload />
            &nbsp; Charger le fichier
          </Button>
          <FormSelect
            variant="primary"
            style={{ maxWidth: "250px", marginLeft: "10px" }} // Sélection du type d'examen
          >
            <option value="option1">Type d'examen</option>
            <option value="option2">ECG</option>
            <option value="option3">EEG (Électroencéphalogramme)</option>
            <option value="option4">Échographie rénale</option>
            <option value="option5">Biopsie Cutanée</option>
            <option value="option6">Biopsie dentaire</option>
          </FormSelect>

          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }} // Masque l'input
            onChange={handleFileUpload} // Appel à la fonction de simulation
          />
        </Row>

        <Row className="resume" style={{ justifyContent: "center", position: "relative" }}>
          {loading ? (
            // Affichage du spinner pendant le chargement
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Analyse en cours...</span>
            </Spinner>
          ) : fileUploaded ? (
            // Affichage du PDF après le chargement
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          ) : null}
        </Row>

        {!loading && fileUploaded && (
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Télécharger le diagnostic
            </Button>
          </Row>
        )}

        <div style={{ height: '150px' }} />
      </Container>
    </div>
  );
}

export default Loading;
