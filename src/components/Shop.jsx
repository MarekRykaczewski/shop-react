import React from "react";
import { Link } from "react-router-dom";
import data from "../data"

function Shop() {

const items = data

const itemElements = items.map(item => (
    <div key={item.id}> 
    <Link className="item" to={`/shop/${item.id}`}>
    <span className="item-title"> {item.brand} {item.title} </span>
    <span className="item-price"> ${item.price} </span>
    <img className="item-image" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="phone" />
    </Link>
    </div>
))

  return (
    <div className="shop">
        <div className="title"> Shop </div>
        <div className="shop-items">
         {itemElements}
        </div>
    </div>
  );
}

export default Shop;
