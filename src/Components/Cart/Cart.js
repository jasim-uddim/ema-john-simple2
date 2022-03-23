import React from "react";

const Cart = (props) => {
  return (
    <div>
      <h1>Order summary</h1>
      <p>sellectItem:{props.cart.length}</p>
    </div>
  );
};

export default Cart;
