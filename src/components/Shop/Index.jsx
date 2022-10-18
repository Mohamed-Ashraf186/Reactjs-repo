import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  return (
    <div className="parent">
      {products.map((product) => {
        console.log(product);
        return (
          <Link
            to={`/shop/${product.id}`}
            key={product.id}
            className="prod-wrap "
          >
            <img className="image" src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
          </Link>
        );
      })}
    </div>
  );
};

export default Shop;
