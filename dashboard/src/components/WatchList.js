import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';   
import MoreHorizIcon  from '@mui/icons-material/MoreHoriz';   
import { watchlist } from "../data/data";
const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}/50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, key }) => {
  const [showWatchListActions, setshowWatchListActions] = useState(false);

  const handleMouseEnter = () => {
    setshowWatchListActions(true);
  };
  const handleMouseExit = () => {
    setshowWatchListActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ) : (
            <KeyboardArrowUpIcon className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name}/>}
    </li>
  );
};

const WatchListActions = ({uid}) => {
  return (
    <span className="actions">
      <span className="actions">
        <Tooltip title="Buy (b)" placement="top" arrow TransitionComponent={Grow}><button className="buy">Buy</button></Tooltip>
         <Tooltip title="Sell (s)" placement="top" arrow TransitionComponent={Grow}><button className="sell">Sell</button></Tooltip>
          <Tooltip title="Analytics (a)" placement="top" arrow TransitionComponent={Grow}>
            <button className="action"><BarChartOutlinedIcon className="icon"/></button>
          </Tooltip>
           <Tooltip title="More (m)" placement="top" arrow TransitionComponent={Grow}>
            <button className="action"><MoreHorizIcon className="icon"/></button>
          </Tooltip>
      </span>
    </span>
  )
}