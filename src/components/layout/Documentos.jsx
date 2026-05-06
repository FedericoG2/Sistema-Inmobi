import React from "react";
import { Card, ListGroup, Button, Dropdown } from "react-bootstrap";



export function Documentos() {
  const documentos = [
    { id: 1, nombre: 'Documento Identidad', peso: '2.4 MB', fecha: '14 Abr 2026', tipo: 'pdf' },
    { id: 2, nombre: 'Contrato Vigente.pdf', peso: '840 KB', fecha: '10 Ene 2024', tipo: 'img' },
    { id: 3, nombre: 'Recibo Sueldo.pdf', peso: '840 KB', fecha: '10 Ene 2024', tipo: 'img' },
    { id: 4, nombre: 'Garante-1.pdf', peso: '540 KB', fecha: '10 Ene 2024', tipo: 'img' },
    { id:5 , nombre: 'Garante-2.pdf', peso: '540 KB', fecha: '10 Ene 2024', tipo: 'img' },
  ];

  return (
    <Card className="shadow-sm border-0 rounded-4">
      <Card.Header className="bg-white border-0 pt-4 pb-0 px-4">
        <h5 className="fw-bold text-dark">Documentación Adjunta</h5>
      </Card.Header>
      
      <Card.Body className="p-0">
        <ListGroup variant="flush">
          {documentos.map((doc) => (
            <ListGroup.Item key={doc.id} className="py-3 px-4 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
               
                <div className="me-3 fs-4">
                  {doc.tipo === 'pdf' ? '🖼️' : '📄'}
                </div>
                
                <div>
                  <div className="fw-bold text-dark mb-0">{doc.nombre}</div>
                  <small className="text-muted">{doc.peso} • Subido el {doc.fecha}</small>
                </div>
              </div>

              <Dropdown align="end">
                <Dropdown.Toggle as={Button} variant="light" className="border">
                  Acciones
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/abrir">Abrir</Dropdown.Item>
                  <Dropdown.Item href="#/descargar">Descargar</Dropdown.Item>
                  <Dropdown.Item href="#/descargar">Eliminar</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

