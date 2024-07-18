import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav  } from 'react-bootstrap';
import 메인사진 from './img/bg.png';


function App() {
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

      <div className='main-bg' style={{ backgroundImage : 'url('+ 메인사진 + ')' }}></div>

      <div className="container">
        <div className="row">
            <div className="col-md-4"> 
              <img src={process.env.PUBLIC_URL + '/logo192.png'} /> 
              <h4>상품명</h4>
              <p>상품설명</p>
            </div>
            <div className="col-md-4">
              <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
              <h4>상품명</h4>
              <p>상품설명</p>
            </div>     
            <div className="col-md-4">
              <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
              <h4>상품명</h4>
              <p>상품설명</p>
            </div>

        </div>
      </div>
    
    </div>
  );
}

export default App;
