import React from "react";
import { NavLink } from "react-router-dom"; 
import { Divider } from "@mui/material";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
     
          <NavLink to="/getproductsone/:id"> 
            <img
              src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70"
              alt=""
            />
            <div className="cart_btn">
              <div className="cart_btn1">Add to Cart</div>
              <div className="cart_btn2">Buy Now</div>
            </div>
          </NavLink>
        </div>
        <div className="right_cart">
          <h3>Fitness Gear</h3>
          <h4>Pigeon FAVOURITE Electric Kettle (1.5 L, Sliver, Black) </h4>
          <Divider />
          <p className="mrp">M.R.P : 1125 PKR</p>
          <p>
            Deal of the Day :<span style={{ color: "#B12704" }}>625.00 PKR</span>{" "}
          </p>
          <p>
            You save :<span style={{ color: "#B12704" }}>500.00 PKR</span>{" "}
          </p>

          <div className="discount_box">
            <h5>
              Discount : <span styl={{ color: "#111" }}>Extra 10% Off </span>
            </h5>
            <h4>
              Free Delivery :{" "}
              <span style={{ color: "#111", fontWeight: "600" }}> {" "}Feb-01{" "}</span>{" "}
              Details
            </h4>
            <h4>
              Fastest Delivery :{" "}
              <span style={{ color: "#111" }}>Tomorrow 9:00 AM</span>{" "}
            </h4>
          </div>
          <p className="description">
            {" "}
            About Item :<span style={{ color: "#595956", fontWeight: 500, fontSize: 14, letterSpacing: "0.4px" }}>
              This electric kettle Pigeon will be traveler best friend, a hostelite saviour and answer to all
              carvings. With this appliance you can boil water and can be used for making instant noodles, packet
              soup and green tea.{" "}
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
