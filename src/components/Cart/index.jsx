import React from "react";
import {useSelector}from "react-redux";
import "./Cart.css"

function Cart() {
    const cartList=useSelector(store =>store.cartStore.cartList);
    const cartCount=useSelector(store =>store.cartStore.cartCount)
   
    return (
  <div className="parent">
          {cartList.map((item) => {
            console.log(item)
            return(
              
              <div className="prod-wrapper">
                <div className="prod-name"><p >{item.title}</p></div> 
                <div className="img-wrapper"><img className=" img-fluid" src={item.image}></img></div> 
                <div className="price"><p >{item.price}</p></div> 
                <div className="prod-name"><p >{item.rating.rate}</p></div> 
              </div>
            
            )
          }
          )
  
  }


  </div>)}
  export default Cart;
  



    