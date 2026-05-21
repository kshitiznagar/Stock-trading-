import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [username, setUsername] = useState("User");
  const [margin, setMargin] = useState(100000.00);
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    // Get username
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    // Get margin
    const storedMargin = localStorage.getItem("margin_balance");
    if (storedMargin) {
      setMargin(Number(storedMargin));
    }

    // Get holdings for statistics
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    }).catch(err => console.error("Error fetching holdings for summary:", err));
  }, []);

  const totalInvestment = allHoldings.reduce((sum, stock) => sum + (stock.avg * stock.qty), 0);
  const currentValue = allHoldings.reduce((sum, stock) => sum + (stock.price * stock.qty), 0);
  const totalPL = currentValue - totalInvestment;
  const totalPLPercent = totalInvestment > 0 ? (totalPL / totalInvestment) * 100 : 0;

  const formatK = (val) => {
    return (val / 1000).toFixed(2) + "k";
  };

  const plClass = totalPL >= 0 ? "profit" : "loss";
  const plPercentSign = totalPL >= 0 ? "+" : "";

  return (
    <>
      <div className="username">
        <h6 style={{ textTransform: "capitalize" }}>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{formatK(margin)}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>{formatK(margin)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={plClass} style={{ color: totalPL >= 0 ? "rgb(72, 194, 55)" : "rgb(250, 118, 78)" }}>
              {formatK(totalPL)} <small style={{ color: totalPL >= 0 ? "rgb(72, 194, 55)" : "rgb(250, 118, 78)", fontSize: "0.8rem", marginLeft: "5px" }}>{plPercentSign}{totalPLPercent.toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{formatK(currentValue)}</span>{" "}
            </p>
            <p>
              Investment <span>{formatK(totalInvestment)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
