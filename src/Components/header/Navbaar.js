import React from "react";
import "./navbaar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="left">
            <div className="navlogo">
              <NavLink to="/">
                <img src="./amazon_PNG25.png" alt="amazon_logo" />
              </NavLink>
            </div>
            <div className="nav_searchbaar">
              <input type="text" name="" id="" />
              <div className="search_icon" id="search">
                <SearchIcon id="search" />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="nav_btn">
              <NavLink to="/login">Sign in</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>

            <div className="cart_btn">
              <Badge badgeContent={1} color="primary">
                {" "}
                <AddShoppingCartIcon id="icon" />
              </Badge>
              <p>
                <strong>Cart</strong>
              </p>
            </div>
            <Avatar className="avtar" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
