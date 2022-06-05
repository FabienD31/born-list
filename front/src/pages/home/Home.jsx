import React, { useEffect, useState} from "react";
import Card from "../../components/card/Card.jsx";
import axios from "axios";

import "./home.css";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const results = await axios.get('http://localhost:3001/products/', {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setProducts(results.data)
    }
    getProducts();
  }, []);
console.log(products);
  return (
<div>
  <div className="productMap">
    {products.map((product) => 
      <Card key={product.idProduct} name={product.name} image={product.image} price={product.price} link={product.link} />
    )}
  </div> 
</div>
)};


export default Home;