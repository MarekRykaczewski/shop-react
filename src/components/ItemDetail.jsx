import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

function ItemDetail(props) {

    const items = data

    const { id } = useParams()

    const item = items.find(item => item.id == id)

  return (
    <div className="item-detail">
        <div className="item-title"> {item.brand} {item.title}  </div>
        <span className="item-price"> ${item.price }</span>
        <img className="item-image" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="phone" />
        <button onClick={() => props.handleClick(item)} className="item-button"> Add </button>
    </div>
  );
}

export default ItemDetail;
