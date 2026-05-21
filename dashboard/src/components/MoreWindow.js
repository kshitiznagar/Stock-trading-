import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PushPinIcon from "@mui/icons-material/PushPin";
import "./MoreWindow.css";

const MoreWindow = ({ stock, onClose }) => {
  const [activeTab, setActiveTab] = useState("depth");
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [pinnedSlot, setPinnedSlot] = useState(null);

  // Generate dynamic, realistic market depth levels
  const [bids, setBids] = useState([]);
  const [offers, setOffers] = useState([]);
  const [totalBuyQty, setTotalBuyQty] = useState(0);
  const [totalSellQty, setTotalSellQty] = useState(0);

  useEffect(() => {
    const ltp = stock.price;
    
    // Generate Bids (Buy orders, prices < LTP)
    let bidAccumulator = 0;
    const generatedBids = Array.from({ length: 5 }, (_, i) => {
      const price = parseFloat((ltp - 0.05 * (i + 1) - Math.random() * 0.05).toFixed(2));
      const orders = Math.floor(Math.random() * 40) + 5;
      const qty = (Math.floor(Math.random() * 15) + 1) * 50 + Math.floor(Math.random() * 20);
      bidAccumulator += qty;
      return { price, orders, qty };
    });

    // Generate Offers (Sell orders, prices > LTP)
    let sellAccumulator = 0;
    const generatedOffers = Array.from({ length: 5 }, (_, i) => {
      const price = parseFloat((ltp + 0.05 * (i + 1) + Math.random() * 0.05).toFixed(2));
      const orders = Math.floor(Math.random() * 40) + 5;
      const qty = (Math.floor(Math.random() * 15) + 1) * 50 + Math.floor(Math.random() * 20);
      sellAccumulator += qty;
      return { price, orders, qty };
    });

    setBids(generatedBids);
    setOffers(generatedOffers);
    
    // Set scaled total volumes
    const mockTotalBuy = bidAccumulator * 8 + Math.floor(Math.random() * 1000);
    const mockTotalSell = sellAccumulator * 8 + Math.floor(Math.random() * 1000);
    setTotalBuyQty(mockTotalBuy);
    setTotalSellQty(mockTotalSell);
  }, [stock]);

  // Determine buyer/seller percentage
  const totalVolume = totalBuyQty + totalSellQty;
  const buyerPercent = totalVolume > 0 ? Math.round((totalBuyQty / totalVolume) * 100) : 50;
  const sellerPercent = 100 - buyerPercent;

  // Generate realistic fundamentals dynamically based on the stock name
  const getFundamentals = () => {
    const name = stock.name.toUpperCase();
    let sector = "Financial Services";
    let mCap = "₹4.8T";
    let pe = "22.4";
    let divYield = "1.45%";
    let beta = "1.08";
    let high52 = parseFloat((stock.price * 1.25).toFixed(2));
    let low52 = parseFloat((stock.price * 0.82).toFixed(2));

    if (name.includes("INFY") || name.includes("KPIT") || name.includes("WIPRO") || name.includes("TCS")) {
      sector = "Technology / IT Services";
      mCap = name.includes("TCS") ? "₹11.6T" : name.includes("INFY") ? "₹6.4T" : name.includes("WIPRO") ? "₹3.1T" : "₹78.2B";
      pe = name.includes("KPIT") ? "62.4" : name.includes("INFY") ? "24.8" : "21.1";
      divYield = name.includes("KPIT") ? "0.35%" : "2.40%";
      beta = "1.15";
    } else if (name.includes("RELIANCE") || name.includes("POWER")) {
      sector = "Energy & Conglomerate";
      mCap = name.includes("RELIANCE") ? "₹14.3T" : "₹395.2B";
      pe = name.includes("RELIANCE") ? "25.7" : "18.3";
      divYield = "0.78%";
      beta = "0.98";
    } else if (name.includes("HINDUNILVR") || name.includes("ITC") || name.includes("HUL")) {
      sector = "Consumer Goods (FMCG)";
      mCap = name.includes("HINDUNILVR") || name.includes("HUL") ? "₹5.6T" : "₹2.5T";
      pe = name.includes("ITC") ? "24.6" : "54.2";
      divYield = name.includes("ITC") ? "3.25%" : "1.65%";
      beta = "0.62";
    } else if (name.includes("SBI") || name.includes("HDFC")) {
      sector = "Banking & Finance";
      mCap = name.includes("HDFC") ? "₹8.9T" : "₹4.1T";
      pe = "14.2";
      divYield = "1.20%";
      beta = "1.25";
    }

    return { sector, mCap, pe, divYield, beta, high52, low52 };
  };

  const fundamentals = getFundamentals();

  return (
    <div className="more-overlay">
      <div className="more-modal">
        {/* Header */}
        <div className="more-header">
          <div className="stock-info">
            <h2>{stock.name} <span>NSE</span></h2>
            <div className="current-data">
              <span className="price">₹{stock.price.toFixed(2)}</span>
              <span className={`change ${stock.isDown ? "neg" : "pos"}`}>
                {stock.isDown ? "" : "+"}{stock.percent}
              </span>
            </div>
          </div>
          <button className="close-button" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="more-tabs">
          <button 
            className={`tab-link ${activeTab === "depth" ? "active" : ""}`}
            onClick={() => setActiveTab("depth")}
          >
            Market Depth
          </button>
          <button 
            className={`tab-link ${activeTab === "fundamentals" ? "active" : ""}`}
            onClick={() => setActiveTab("fundamentals")}
          >
            Fundamentals
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === "depth" ? (
          <div className="depth-container">
            {/* Real Zerodha Market Depth Layout */}
            <div className="depth-table-header">
              <div className="bid-header">Bids (Buy)</div>
              <div className="offer-header">Offers (Sell)</div>
            </div>

            <div className="depth-grid">
              {/* Bids Table */}
              <div className="bids-section">
                <table>
                  <thead>
                    <tr>
                      <th>Price</th>
                      <th>Orders</th>
                      <th>Qty.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bids.map((bid, i) => (
                      <tr key={`bid-${i}`}>
                        <td className="bid-price">₹{bid.price.toFixed(2)}</td>
                        <td>{bid.orders}</td>
                        <td>{bid.qty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Offers Table */}
              <div className="offers-section">
                <table>
                  <thead>
                    <tr>
                      <th>Price</th>
                      <th>Orders</th>
                      <th>Qty.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {offers.map((offer, i) => (
                      <tr key={`offer-${i}`}>
                        <td className="offer-price">₹{offer.price.toFixed(2)}</td>
                        <td>{offer.orders}</td>
                        <td>{offer.qty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Total Row */}
            <div className="depth-totals">
              <div className="total-left">
                <span>Total Buy Qty:</span>
                <strong className="bid-price">{totalBuyQty.toLocaleString("en-IN")}</strong>
              </div>
              <div className="total-right">
                <span>Total Sell Qty:</span>
                <strong className="offer-price">{totalSellQty.toLocaleString("en-IN")}</strong>
              </div>
            </div>

            {/* Visual Buyer/Seller Progress Bar */}
            <div className="volume-ratio-wrapper">
              <div className="ratio-labels">
                <span className="pos">{buyerPercent}% Buyers</span>
                <span className="neg">{sellerPercent}% Sellers</span>
              </div>
              <div className="ratio-bar">
                <div className="ratio-fill buyer" style={{ width: `${buyerPercent}%` }}></div>
                <div className="ratio-fill seller" style={{ width: `${sellerPercent}%` }}></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="fundamentals-container">
            <div className="fundamental-stats">
              <div className="fund-box">
                <span className="lbl">Sector</span>
                <span className="val">{fundamentals.sector}</span>
              </div>
              <div className="fund-box">
                <span className="lbl">Market Cap</span>
                <span className="val">{fundamentals.mCap}</span>
              </div>
              <div className="fund-box">
                <span className="lbl">P/E Ratio</span>
                <span className="val">{fundamentals.pe}</span>
              </div>
              <div className="fund-box">
                <span className="lbl">Dividend Yield</span>
                <span className="val">{fundamentals.divYield}</span>
              </div>
              <div className="fund-box">
                <span className="lbl">Beta</span>
                <span className="val">{fundamentals.beta}</span>
              </div>
              <div className="fund-box">
                <span className="lbl">52W High</span>
                <span className="val">₹{fundamentals.high52.toLocaleString("en-IN")}</span>
              </div>
              <div className="fund-box">
                <span className="lbl">52W Low</span>
                <span className="val">₹{fundamentals.low52.toLocaleString("en-IN")}</span>
              </div>
              <div className="fund-box">
                <span className="lbl">LTP</span>
                <span className="val">₹{stock.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Panel / Options Footer */}
        <div className="more-footer">
          <div className="interactive-actions">
            <button 
              className={`footer-action-btn ${isAlertActive ? "alert-active" : ""}`}
              onClick={() => setIsAlertActive(!isAlertActive)}
            >
              <NotificationsActiveIcon className="footer-icon" />
              {isAlertActive ? "Alert Active" : "Set Alert"}
            </button>

            <div className="pin-slots">
              <span className="pin-label"><PushPinIcon style={{ fontSize: "14px", marginRight: "4px" }} /> Pin to:</span>
              <button 
                className={`pin-slot-btn ${pinnedSlot === 1 ? "active" : ""}`}
                onClick={() => setPinnedSlot(pinnedSlot === 1 ? null : 1)}
              >
                Slot 1
              </button>
              <button 
                className={`pin-slot-btn ${pinnedSlot === 2 ? "active" : ""}`}
                onClick={() => setPinnedSlot(pinnedSlot === 2 ? null : 2)}
              >
                Slot 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreWindow;
