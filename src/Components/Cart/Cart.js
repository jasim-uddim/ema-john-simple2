import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tex = parseFloat((total * 0.1).toFixed(2));
  const grand = total + shipping + tex;

  return (
    <div className="cart">
      <h1 className="cart-sm">Order summary</h1>
      <p>sellectItem: {cart.length}</p>
      <p>Total price: ${total}</p>
      <p>Total shipping: ${shipping}</p>
      <p>Tex: ${tex}</p>
      <h4>Grand Total: ${grand}</h4>
    </div>
  );
};

export default Cart;
