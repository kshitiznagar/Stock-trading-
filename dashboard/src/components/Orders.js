import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="orders" style={{ height: "auto", minHeight: "80vh", paddingBottom: "30px" }}>
      <h3 className="title">Orders ({allOrders.length})</h3>

      {allOrders.length > 0 ? (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((stock, index) => {
                const isBuy = stock.mode === "BUY";
                const modeClass = isBuy ? "profit" : "loss"; // Using existing green/red classes

                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td className={modeClass} style={{ fontWeight: "bold" }}>{stock.mode}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-orders" style={{ marginTop: "10%" }}>
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn" style={{ backgroundColor: "#387ed1", color: "#fff", textDecoration: "none", borderRadius: "4px", marginTop: "15px" }}>
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
