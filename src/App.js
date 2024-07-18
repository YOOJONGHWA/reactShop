import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 메인사진 from './img/bg.png';
import { useState } from 'react';
import data from './Component/data.js';
import CardComponent from './Component/CardComponent.js';

function App() {
  const [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage: 'url(' + 메인사진 + ')' }}></div>

      <div className="container">
        <div className="row">
          {shoes.map((shoe, index) => (
            <CardComponent key={index} shoes={shoe} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
