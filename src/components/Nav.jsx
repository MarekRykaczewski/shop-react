import React from "react";
import { Link } from "react-router-dom"

function Nav(props) {
  return (
    <nav className="nav">
        <Link to='/'>
            <div>Logo</div>
        </Link>
        <ul className="nav-links">
            <Link to='/shop'>
                <li>Shop</li>
            </Link>
            <Link to='/cart'> 
                <li>Cart [{props.cartSize}]</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
