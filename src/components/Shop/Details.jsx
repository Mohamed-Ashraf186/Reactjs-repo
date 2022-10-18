import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./shop.css";
const Details = () => {
  const params = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  const [product, setProduct] = useState({});
  return (
    <div>
      <dir>
        <img style={{ width: "250px" }} src={product.image} alt="" />
      </dir>
      <div>
        <h4>{product.title}</h4>
        <h5>{product.price}</h5>
      </div>
    </div>
  );
};

export default Details;
