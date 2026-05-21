import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points up" style={{ color: "#4caf50" }}>22,453.80</p>
          <p className="percent up" style={{ color: "#4caf50", fontSize: "0.75rem", fontWeight: "bold" }}>+98.40 (+0.44%)</p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points up" style={{ color: "#4caf50" }}>73,914.50</p>
          <p className="percent up" style={{ color: "#4caf50", fontSize: "0.75rem", fontWeight: "bold" }}>+382.10 (+0.52%)</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
