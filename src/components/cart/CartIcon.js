import React from "react";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg.svg";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">13</span>
  </div>
);

export default CartIcon;
