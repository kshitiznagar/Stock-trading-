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
    <div className="orders">
      <>
        <h3 className="title">Orders ({allOrders.length})</h3>

        <div className="order-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
            {allOrders.map((stock, index) => {
              const name = stock.name;
              const qty = stock.qty;
              const price = stock.price;
              const mode = stock.mode;

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>{stock.mode}</td>
                </tr>
              );
            })}
          </table>
        </div>

        <div className="row">
          <div className="col">
            <h5>
              29,875.<span>55</span>{" "}
            </h5>
            <p>Total investment</p>
          </div>
          <div className="col">
            <h5>
              31,428.<span>95</span>{" "}
            </h5>
            <p>Current value</p>
          </div>
          <div className="col">
            <h5>1,553.40 (+5.20%)</h5>
            <p>P&L</p>
          </div>
        </div>
      </>
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/allOrders"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
