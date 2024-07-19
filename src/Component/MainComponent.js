import React from 'react';
import { Link } from 'react-router-dom';
import 메인사진 from '../img/bg.png';

function MainComponent({ shoes }) {
  const shoesArray = Array.isArray(shoes) ? shoes : shoes.shoes || [];
  return (
    <>
      <div className='main-bg' style={{ backgroundImage: `url(${메인사진})` }}></div>
      <div className="container">
        <div className="row">
          {shoesArray.map((shoe, index) => (
            <CardComponent key={index} shoe={shoe} />
          ))}
        </div>
      </div>
    </>
  );
}

function CardComponent({ shoe }) { // 객체 구조 분해 할당으로 수정
  return (
    <div className="col-md-4">
      <Link to={`/detail/${shoe.id}`}>
        <img src={shoe.image}  width="80%" />
      </Link>
      <h4>{shoe.title}</h4>
      <p>{shoe.content}</p>
      <p>{shoe.price}원</p>
    </div>
  );
}

export default MainComponent;
