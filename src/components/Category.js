import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
function Category() {
  return (
    <div className="category">
      <div className="category_container">
        <Link>
          <div className="category_items">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
              alt=""
            />
            <p>Groceries</p>
          </div>
        </Link>
        <Link>
          <div className="category_items">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
              alt=""
            />
            <p>Mobiles</p>
          </div>
        </Link>
        <Link>
          <div className="category_items">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
              alt=""
            />
            <p>Fashion</p>
          </div>
        </Link>
        <Link>
          <div className="category_items">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
              alt=""
            />
            <p>Electronics</p>
          </div>
        </Link>
        <Link>
          <div className="category_items">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
              alt=""
            />
            <p>Home</p>
          </div>
        </Link>
        <Link>
          <div className="category_items">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
              alt=""
            />
            <p>Appliances</p>
          </div>
        </Link>

        <Link>
          <div className="category_items">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
              alt=""
            />
            <p>Travel</p>
          </div>
        </Link>

        <Link>
          <div className="category_items">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
              alt=""
            />
            <p>Top offers</p>
          </div>
        </Link>

        <Link>
          <div className="category_items">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
              alt=""
            />
            <p>Beauty, toys and more</p>
          </div>
        </Link>

        <Link>
          <div className="category_items">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
              alt=""
            />
            <p>Two wheelers</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Category;
