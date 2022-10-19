import { useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import "./shop.css";
import { addToCart } from "../../redux/cartSlice";


const Shop = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);


  const dispatch=useDispatch();


  const handleAddToCart=(prod)=>{
    dispatch(addToCart(prod))
  }

  const global=useSelector(store=>store.cartStore)

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
          <div key={product.id} className="prod-wrap ">
          <Link
            to={`/shop/${product.id}`}
            key={product.id}
            
          >
            <img className="image" src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
          </Link>
            <button onClick={()=>handleAddToCart(product)} type="button" className="add-to-cart"> Add to cart</button>
          </div>

        );
      })}
    </div>
  );
};

export default Shop;
