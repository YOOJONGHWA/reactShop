import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import MainComponent from './Component/MainComponent.js';
import DetailsComponent from './Component/DetailsComponent.js';
import data from './Component/data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [shoes, shoesSet] = useState(data);
  const [isAscending, setIsAscending] = useState(true); // 정렬 상태 추가
  let navigate = useNavigate();

  const sortShoes = () => {
    let sortedShoes = [...shoes].sort((a, b) => {
      if (isAscending) {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    shoesSet(sortedShoes);
    setIsAscending(!isAscending); // 정렬 순서 변경
  };

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event') }}>event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<MainComponent shoes={shoes} />} />
        <Route path='/detail/:id' element={<DetailsComponent shoes={shoes} />} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>맴버임</div>} />
          <Route path='location' element={<div>위치정보</div>} />
        </Route>
        <Route path='/event' element={<Event />}>
          <Route path='1' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='2' element={<div>생일기념 쿠폰 받기</div>} />
        </Route>
        <Route path='*' element={<div>없는 페이지</div>} />
      </Routes>
      <Button onClick={sortShoes}>
        {isAscending ? '가나다순 정렬' : '다나가순 정렬'}
      </Button>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
