import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import AnalyticsWindow from "./AnalyticsWindow";
import MoreWindow from "./MoreWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, mode) => {},
  closeBuyWindow: () => {},
  openAnalyticsWindow: (stock) => {},
  closeAnalyticsWindow: () => {},
  openMoreWindow: (stock) => {},
  closeMoreWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderMode, setOrderMode] = useState("BUY");

  // Analytics states
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [analyticsStock, setAnalyticsStock] = useState(null);

  // More options states
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [moreStock, setMoreStock] = useState(null);

  const handleOpenBuyWindow = (uid, mode = "BUY") => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setOrderMode(mode);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenAnalyticsWindow = (stock) => {
    setIsAnalyticsOpen(true);
    setAnalyticsStock(stock);
  };

  const handleCloseAnalyticsWindow = () => {
    setIsAnalyticsOpen(false);
    setAnalyticsStock(null);
  };

  const handleOpenMoreWindow = (stock) => {
    setIsMoreOpen(true);
    setMoreStock(stock);
  };

  const handleCloseMoreWindow = () => {
    setIsMoreOpen(false);
    setMoreStock(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openAnalyticsWindow: handleOpenAnalyticsWindow,
        closeAnalyticsWindow: handleCloseAnalyticsWindow,
        openMoreWindow: handleOpenMoreWindow,
        closeMoreWindow: handleCloseMoreWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} mode={orderMode} />}
      {isAnalyticsOpen && analyticsStock && (
        <AnalyticsWindow stock={analyticsStock} onClose={handleCloseAnalyticsWindow} />
      )}
      {isMoreOpen && moreStock && (
        <MoreWindow stock={moreStock} onClose={handleCloseMoreWindow} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;