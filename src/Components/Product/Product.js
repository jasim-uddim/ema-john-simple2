import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = ({ clickhandeler, product }) => {
  const { name, img, price, seller, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>
          <small>price: ${price}</small>
        </p>
        <p>
          <small>seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings}stars</small>
        </p>
      </div>
      <button onClick={clickhandeler} className="btn-cart">
        <p className="btn-btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
