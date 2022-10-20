import "./navbar.css";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'


const Navbar = () => {

  const cartList=useSelector(store=>store.cartStore.cartList)
  const cartCount=useSelector(store=>store.cartStore.cartCount)


  return (
    <div className="nav-wrapper ">
      <h3>logo</h3>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>

        <li>
          <Link to="/Cart">Cart</Link>
        </li>
        
        
        <li>
          <Link to="/signup">Sign up</Link>
        </li>

                
        <li>
          <Link to="/login">Login</Link>
        </li>
        

      </ul>
    </div>
  );
};

export default Navbar;
