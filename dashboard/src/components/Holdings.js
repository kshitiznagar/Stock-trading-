import React, {useState, useEffect} from "react";
import axios from "axios";
// import { holdings } from "../data/data";
const Holdings = () => {

  const [allHoldings, setAllHoldings] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allHoldings").then((res)=>{
      setAllHoldings(res.data);
    })
  }, []);

  const totalInvestment = allHoldings.reduce((sum, stock) => sum + (stock.avg * stock.qty), 0);
  const currentValue = allHoldings.reduce((sum, stock) => sum + (stock.price * stock.qty), 0);
  const totalPL = currentValue - totalInvestment;
  const totalPLPercent = totalInvestment > 0 ? (totalPL / totalInvestment) * 100 : 0;

  const formatValue = (val) => {
    const formatted = val.toFixed(2);
    const parts = formatted.split(".");
    return {
      integer: Number(parts[0]).toLocaleString("en-IN"),
      decimal: parts[1]
    };
  };

  const investmentFmt = formatValue(totalInvestment);
  const currentValueFmt = formatValue(currentValue);
  const plFmt = formatValue(totalPL);
  const plClass = totalPL >= 0 ? "profit" : "loss";
  const plPercentSign = totalPL >= 0 ? "+" : "";

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {investmentFmt.integer}.<span>{investmentFmt.decimal}</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currentValueFmt.integer}.<span>{currentValueFmt.decimal}</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={plClass} style={{ color: totalPL >= 0 ? "rgb(72, 194, 55)" : "rgb(250, 118, 78)" }}>
            {plFmt.integer}.<span>{plFmt.decimal}</span> ({plPercentSign}{totalPLPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
