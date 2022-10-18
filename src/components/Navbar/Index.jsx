import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
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
      </ul>
    </div>
  );
};

export default Navbar;
