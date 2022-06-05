import React from "react";
import "./card.css";
import PropTypes from 'prop-types';


const Card = (product) => {
  return (
    <div className="card">
      <h2 className="name">{product.name}</h2>
      <img className="imgCard" src={product.image} alt="imageCard"/>
      <a className="link" href={product.link} >Aller sur le site</a>
      <p className="price">{product.price} €<span>( prix indicatif)</span></p>
      <button className="btnContribution" onClick={()=>{}}>Contribuer</button>
    </div>
  )
}
export default Card;

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  link: PropTypes.string
}
