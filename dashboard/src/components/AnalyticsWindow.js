import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
import CloseIcon from "@mui/icons-material/Close";
import "./AnalyticsWindow.css";

// Register ChartJS plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Legend,
  Filler
);

const AnalyticsWindow = ({ stock, onClose }) => {
  const [timeframe, setTimeframe] = useState("1D");
  const [chartData, setChartData] = useState(null);

  // Generate dynamic mock history based on the stock's LTP (Last Traded Price)
  useEffect(() => {
    const basePrice = stock.price;
    let labels = [];
    let dataPoints = [];

    if (timeframe === "1D") {
      labels = ["09:15", "10:15", "11:15", "12:15", "13:15", "14:15", "15:15", "15:30"];
      let currentPrice = basePrice * 0.99; // start slightly lower
      dataPoints = labels.map(() => {
        currentPrice = currentPrice * (1 + (Math.random() * 0.015 - 0.007));
        return parseFloat(currentPrice.toFixed(2));
      });
      // Force last point near current price
      dataPoints[dataPoints.length - 1] = basePrice;
    } else if (timeframe === "1W") {
      labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Mon (L)", "Tue (L)"];
      let currentPrice = basePrice * 0.97;
      dataPoints = labels.map(() => {
        currentPrice = currentPrice * (1 + (Math.random() * 0.03 - 0.012));
        return parseFloat(currentPrice.toFixed(2));
      });
      dataPoints[dataPoints.length - 1] = basePrice;
    } else if (timeframe === "1M") {
      labels = Array.from({ length: 15 }, (_, i) => `Day ${i * 2 + 1}`);
      let currentPrice = basePrice * 0.94;
      dataPoints = labels.map(() => {
        currentPrice = currentPrice * (1 + (Math.random() * 0.05 - 0.02));
        return parseFloat(currentPrice.toFixed(2));
      });
      dataPoints[dataPoints.length - 1] = basePrice;
    } else if (timeframe === "1Y") {
      labels = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];
      let currentPrice = basePrice * 0.85;
      dataPoints = labels.map(() => {
        currentPrice = currentPrice * (1 + (Math.random() * 0.08 - 0.035));
        return parseFloat(currentPrice.toFixed(2));
      });
      dataPoints[dataPoints.length - 1] = basePrice;
    }

    const lineColor = stock.isDown ? "rgba(250, 118, 78, 1)" : "rgba(72, 194, 55, 1)";
    const fillColor = stock.isDown ? "rgba(250, 118, 78, 0.08)" : "rgba(72, 194, 55, 0.08)";

    setChartData({
      labels,
      datasets: [
        {
          label: "Price (₹)",
          data: dataPoints,
          borderColor: lineColor,
          backgroundColor: fillColor,
          fill: true,
          tension: 0.35,
          borderWidth: 2.5,
          pointRadius: timeframe === "1D" || timeframe === "1W" ? 4 : 2,
          pointHoverRadius: 6,
          pointBackgroundColor: lineColor,
          pointBorderColor: "#fff",
        },
      ],
    });
  }, [timeframe, stock]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(33, 33, 33, 0.95)",
        titleFont: { size: 12, weight: "bold" },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 4,
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `₹${context.parsed.y.toLocaleString("en-IN")}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9e9e9e",
          font: { size: 10 },
        },
      },
      y: {
        grid: {
          color: "rgba(235, 235, 235, 0.8)",
          drawBorder: false,
        },
        ticks: {
          color: "#9e9e9e",
          font: { size: 10 },
          callback: function (value) {
            return `₹${value.toLocaleString("en-IN")}`;
          },
        },
      },
    },
  };

  // Generate realistic key ratios
  const prevClose = parseFloat((stock.price * (stock.isDown ? 1.015 : 0.985)).toFixed(2));
  const open = parseFloat((prevClose * (1 + (Math.random() * 0.01 - 0.005))).toFixed(2));
  const high = parseFloat((Math.max(stock.price, open) * (1 + Math.random() * 0.01)).toFixed(2));
  const low = parseFloat((Math.min(stock.price, open) * (1 - Math.random() * 0.01)).toFixed(2));
  const volume = Math.floor(100000 + Math.random() * 900000).toLocaleString("en-IN");
  const avgPrice = parseFloat(((high + low + stock.price) / 3).toFixed(2));

  return (
    <div className="analytics-overlay">
      <div className="analytics-modal">
        {/* Header */}
        <div className="analytics-header">
          <div className="stock-title">
            <h2>{stock.name} <span>NSE</span></h2>
            <div className="price-trends">
              <span className="ltp">₹{stock.price.toFixed(2)}</span>
              <span className={`change-pct ${stock.isDown ? "negative" : "positive"}`}>
                {stock.isDown ? "" : "+"}{stock.percent}
              </span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        {/* Timeframe Buttons */}
        <div className="timeframe-selector">
          {["1D", "1W", "1M", "1Y"].map((tf) => (
            <button
              key={tf}
              className={`tf-btn ${timeframe === tf ? "active" : ""}`}
              onClick={() => setTimeframe(tf)}
            >
              {tf}
            </button>
          ))}
        </div>

        {/* Line Chart */}
        <div className="chart-wrapper">
          {chartData ? (
            <Line data={chartData} options={options} />
          ) : (
            <div className="loader">Loading technical charts...</div>
          )}
        </div>

        {/* Statistics Grid */}
        <div className="stats-grid">
          <div className="stats-box">
            <span className="stats-label">Open</span>
            <span className="stats-value">₹{open.toLocaleString("en-IN")}</span>
          </div>
          <div className="stats-box">
            <span className="stats-label">High</span>
            <span className="stats-value">₹{high.toLocaleString("en-IN")}</span>
          </div>
          <div className="stats-box">
            <span className="stats-label">Low</span>
            <span className="stats-value">₹{low.toLocaleString("en-IN")}</span>
          </div>
          <div className="stats-box">
            <span className="stats-label">Prev. Close</span>
            <span className="stats-value">₹{prevClose.toLocaleString("en-IN")}</span>
          </div>
          <div className="stats-box">
            <span className="stats-label">Volume</span>
            <span className="stats-value">{volume}</span>
          </div>
          <div className="stats-box">
            <span className="stats-label">Avg. Price</span>
            <span className="stats-value">₹{avgPrice.toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsWindow;
