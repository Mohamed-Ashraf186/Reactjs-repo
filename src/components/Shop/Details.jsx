import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./shop.css";
import { addToCart } from "../../redux/cartSlice";
import { useSelector ,useDispatch } from "react-redux";


const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  const handelAddToCart=(prod)=>{
    dispatch( addToCart(prod))
  }

    const global=useSelector(store =>store.cartStore.cartCount)
    const global2=useSelector(store =>store.cartStore.cartList)

  const [product, setProduct] = useState({});
  return (
    <div className="product">
      <div className=" w-50 h-50">
        <img style={{ width: "250px" }} src={product.image} alt="" />
      </div>
      <div>
        <h4>{product.title}</h4>
        <h5>{product.price}</h5>
        <div className=" details-cart">
          <button 
          onClick={()=>handelAddToCart(product)}
          type="button" > Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
