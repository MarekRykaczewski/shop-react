import React from "react";

function Cart(props) {

  const cartElements = props.cart.map(item => (
    <div key={item.id} className={"cart-item"}>
      <img className="cart-image" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="phone" />
      {item.brand} {item.title}
      <span> ${item.price} </span>
      <span> Quantity: {item.quantity} </span>
      <div className="cart-buttons"> 
        <button className="cart-button" onClick={() => props.handleIncrementClick(item)}>Add</button>
        {item.quantity > 1 && <button className="cart-button" onClick={() => props.handleDecrementClick(item)}>Sub</button>}
        <button className="cart-button" onClick={() => props.handleDeleteClick(item)}> Delete </button>
      </div>
    </div>

  ))

  return (
    <div className="cart">
        {cartElements}
    </div>
  );
}

export default Cart;
