import React, { useState, useEffect } from "react";

const Funds = () => {
  const [margin, setMargin] = useState(100000.00);

  useEffect(() => {
    const storedMargin = localStorage.getItem("margin_balance");
    if (storedMargin) {
      setMargin(Number(storedMargin));
    } else {
      localStorage.setItem("margin_balance", "100000.00");
    }
  }, []);

  const handleAddFunds = () => {
    const amountStr = prompt("Enter the amount of funds you wish to add (₹):");
    if (amountStr === null) return;
    
    const amount = parseFloat(amountStr);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid positive amount.");
      return;
    }

    const newMargin = margin + amount;
    setMargin(newMargin);
    localStorage.setItem("margin_balance", newMargin.toFixed(2));
    alert(`Successfully added ₹${amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })} to your account!`);
  };

  const handleWithdrawFunds = () => {
    const amountStr = prompt("Enter the amount of funds you wish to withdraw (₹):");
    if (amountStr === null) return;
    
    const amount = parseFloat(amountStr);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid positive amount.");
      return;
    }

    if (amount > margin) {
      alert("Insufficient funds in your account.");
      return;
    }

    const newMargin = margin - amount;
    setMargin(newMargin);
    localStorage.setItem("margin_balance", newMargin.toFixed(2));
    alert(`Successfully withdrew ₹${amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })} from your account!`);
  };

  return (
    <>
      <div className="funds" style={{ borderBottom: "1px solid #eee", paddingBottom: "20px", marginBottom: "20px" }}>
        <p style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}>Instant, zero-cost fund transfers with UPI</p>
        <div style={{ marginTop: "10px" }}>
          <button 
            className="btn" 
            onClick={handleAddFunds}
            style={{ 
              backgroundColor: "#4caf50", 
              color: "#fff", 
              border: "none", 
              borderRadius: "4px", 
              padding: "10px 20px", 
              marginRight: "10px", 
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "0.9rem"
            }}
          >
            Add funds
          </button>
          <button 
            className="btn" 
            onClick={handleWithdrawFunds}
            style={{ 
              backgroundColor: "#4184f3", 
              color: "#fff", 
              border: "none", 
              borderRadius: "4px", 
              padding: "10px 20px", 
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "0.9rem"
            }}
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col">
          <span>
            <p style={{ fontWeight: "bold" }}>Equity</p>
          </span>

          <div className="table" style={{ borderRadius: "8px", border: "1px solid #f0f0f0" }}>
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored" style={{ color: "#4184f3", fontWeight: "bold" }}>
                {margin.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp" style={{ fontWeight: "600" }}>0.00</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp" style={{ fontWeight: "600" }}>
                {margin.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{margin.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity" style={{ border: "1px solid #f0f0f0", borderRadius: "8px", padding: "30px", textAlign: "center", backgroundColor: "#fafafa" }}>
            <p style={{ color: "#888", marginBottom: "15px" }}>You don't have a active commodity account</p>
            <button 
              className="btn" 
              onClick={() => alert("Commodity segment activation request received! Processing takes up to 24 hours.")}
              style={{ 
                backgroundColor: "#4184f3", 
                color: "#fff", 
                border: "none", 
                borderRadius: "4px", 
                padding: "8px 16px", 
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "0.85rem"
              }}
            >
              Open Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
