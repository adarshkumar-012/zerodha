import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL || "http://localhost:3002"}/newOrder`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "BUY",
        }
      );

      console.log("Order Placed:", response.data);
      alert("Order placed successfully!");

      if (generalContext?.closeBuyWindow) {
        generalContext.closeBuyWindow();
      }
    } catch (error) {
      console.error("Buy Error:", error);

      if (error.response) {
        alert(`Error: ${error.response.data.message || "Server Error"}`);
      } else {
        alert("Failed to place order. Check backend connection.");
      }
    }
  };

  const handleCancelClick = () => {
    if (generalContext?.closeBuyWindow) {
      generalContext.closeBuyWindow();
    }
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              min="0"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          Margin required ₹
          {(Number(stockQuantity) * Number(stockPrice)).toFixed(2)}
        </span>

        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
          >
            Buy
          </button>

          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
