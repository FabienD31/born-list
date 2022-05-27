import React from "react";
import Card from "../../components/card/Card.jsx";
import products from "../../components/card/dataFake.js";

import "./home.css";

const Home = () => {

  return (
<div>
  <div className="productMap">
    {products.map((product) => 
      <Card key={product.id} name={product.name} image={product.image} price={product.price} link={product.link} />
    )}
  </div> 
</div>
)};


export default Home;