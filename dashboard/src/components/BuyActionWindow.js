import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(100.0);
  const generalContext = useContext(GeneralContext);

  const handleOrderClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: mode,
    }).then(() => {
      // Reload page or let user know? We can just close window
      generalContext.closeBuyWindow();
      window.location.reload(); // Refresh to update holdings/orders
    }).catch(err => {
      console.error(err);
      generalContext.closeBuyWindow();
    });
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  const isBuy = mode === "BUY";
  const themeColor = isBuy ? "#4184f3" : "#ff5722";

  return (
    <div className="container" id="buy-window" draggable="true" style={{ border: `1px solid ${themeColor}`, height: "auto", minHeight: "220px", paddingBottom: "15px" }}>
      {/* Dynamic Header */}
      <div className="header" style={{ backgroundColor: themeColor, padding: "12px 20px", borderTopLeftRadius: "3px", borderTopRightRadius: "3px", color: "#fff" }}>
        <h3 style={{ margin: 0, fontSize: "0.95rem", fontWeight: "600" }}>
          {isBuy ? "Buy" : "Sell"} {uid}
        </h3>
      </div>

      <div className="regular-order" style={{ paddingTop: "15px" }}>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons" style={{ marginTop: "10px" }}>
        <span style={{ fontSize: "0.8rem", color: "#666" }}>
          Margin required ₹{(stockQuantity * stockPrice * 0.2).toFixed(2)} (5x leverage)
        </span>
        <div>
          <button 
            className="btn" 
            onClick={handleOrderClick}
            style={{ 
              backgroundColor: themeColor, 
              color: "#fff", 
              border: "none", 
              borderRadius: "4px",
              padding: "8px 16px",
              fontSize: "0.85rem",
              fontWeight: "600",
              cursor: "pointer",
              marginRight: "6px"
            }}
          >
            {isBuy ? "Buy" : "Sell"}
          </button>
          <button 
            className="btn btn-grey" 
            onClick={handleCancelClick}
            style={{ 
              border: "none", 
              borderRadius: "4px",
              padding: "8px 16px",
              fontSize: "0.85rem",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;