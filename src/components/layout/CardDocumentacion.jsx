import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function CardDocumentacion() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://placehold.co/600x400?text=Imagen+de+Prueba" />
     
      <Card.Body>
        <Card.Title>NOMBRE INQUILINO</Card.Title>
        <Card.Text>
         Numero de Dni   
        </Card.Text>
        <Card.Text>
          🏡 Direccion: 
        </Card.Text>
        <Card.Text>
        📲 Numero de Celular: 
        </Card.Text>
        <Card.Text>
        📧 Direccion de correo electronico:  
        </Card.Text>
        <Button>Editar</Button>
      </Card.Body>
    </Card>
  );
}

