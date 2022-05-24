import React from "react";
import "./card.css";
//import PropTypes from 'prop-types';


const Card = ({name, image, price, link}) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image} alt="imageCard"/>
      <a href={link} >Lien du site</a>
      <p>{price} ( prix indicatif)</p>
      <button>mettre composent</button>
    </div>
  )
}

// Card.PropTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   link: PropTypes.string.isRequired
// }

export default Card;