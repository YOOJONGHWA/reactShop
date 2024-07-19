import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

let YellowBtn = styled.button `
    background : ${ props => props.bg };
    color :  ${ props => props.bg == 'blue' ? 'white' : 'black'};
    padding : 10px;
`

function DetailsComponent(props) {
    let [isVisible, setIsVisible] = useState(true);
    let [num, setNum] = useState('')
    let [count , setCount] =useState(0);
    const [countdown, setCountdown] = useState(2);

    let { id } = useParams();
    // useEffect(() => {
    //     // 타이머를 사용하여 1초마다 카운트다운을 업데이트
    //     const interval = setInterval(() => {
    //         setCountdown(prev => {
    //             if (prev <= 1) {
    //                 clearInterval(interval);
    //                 setIsVisible(false);
    //                 return 0;
    //             }
    //             return prev - 1;
    //         });
    //     }, 1000);

    //     // 클린업 함수: 컴포넌트 언마운트 시 인터벌 제거
    //     return () => clearInterval(interval);
    // }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행 // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행

    useEffect(()=>{
        if (isNaN(num) == true){
          alert('그러지마세요')
        }
      }, [num])

    let 찾은상품 = props.shoes.find(function(x){
      return x.id == id
    });
    return (
    <div className="container">
        <div className='alert alert-warning' style={{ display: isVisible ? 'block' : 'none' }}>
            {countdown} 초이내 구매시 할인
        </div>
        {count}
        <YellowBtn onClick={ () => { setCount(count + 1) }} bg="blue">버튼</YellowBtn>
        <YellowBtn bg="orange">버튼</YellowBtn>
        <div className="row">
        <div className="col-md-6">
        <img src={찾은상품.image} width="100%" />
        </div>
        <div className="col-md-6">
            <input onChange={ (e) => { setNum(e.target.value) } } />
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
        </div>
        </div>
    </div> 
    );
}

export default DetailsComponent;