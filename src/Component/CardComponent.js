import React from "react";

function CardComponent(props){
    return (
      <div className="col-md-4">
        <img src={ props.shoes.image } width="80%" alt={props.shoes.title} />
        <h4>{ props.shoes.title }</h4>
        <p>{ props.shoes.content }</p>
        <p>{ props.shoes.price }원</p>
      </div>
    )
}

export default CardComponent;
