import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
function Product(props) {
  return (
    <>
      <Link to='www.google.com'>
        <div className="product">
          <div className="product_image">
            <img src={props.imgsrc} alt="" />
          </div>
          <div className="product_category">
            <h3>{props.category}</h3>
          </div>
          <div className="product_price">
            <h4>{props.price}</h4>
          </div>
          <div className="product_name">{props.name}</div>
        </div>
      </Link>
    </>
  );
}

export default Product;
