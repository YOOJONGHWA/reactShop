import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function CartComponent() {

    let cart = useSelector((state) => state.cart) // 리덕스 가져와줌
    console.log(cart[0].name);
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td>{cart[index].id}</td>
                            <td>{cart[index].name}</td>
                            <td>{cart[index].count }</td>
                        </tr>
                    ))}
                </tbody>
            </Table> 
        </div>
    );
}

export default CartComponent;
