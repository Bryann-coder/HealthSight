// InscriptionCard.jsx

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Form, Button } from "react-bootstrap";

function InscriptionCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", password: "" }); 
  };

  return (
    <Card className="quote-card-view">
  <Card.Body>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName" className="d-flex align-items-center mb-3">
        <Form.Label className="me-2" style={{ width: '200px' }}>NOM</Form.Label>
        <Form.Control
          type="text"
          placeholder="Entrer votre nom"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail" className="d-flex align-items-center mb-3">
        <Form.Label className="me-2" style={{ width: '200px' }}>E-MAIL</Form.Label>
        <Form.Control
          type="email"
          placeholder="Entrer votre email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPassword" className="d-flex align-items-center mb-3">
        <Form.Label className="me-2" style={{ width: '200px' }}>MOT DE PASSE</Form.Label>
        <Form.Control
          type="password"
          placeholder="Entrer votre mot de passe"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        S'inscrire
      </Button>
    </Form>
  </Card.Body>
  <div style={{ height: '300px' }} />
</Card>

    
  );
}

export default InscriptionCard;
