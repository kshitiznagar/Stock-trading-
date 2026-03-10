import React from "react";
function Team() {
  return (
    <div className="container text-center">
      <h3>People</h3>
      <div className="row">
        <div className="col-6 p-5 ml-5">
          <img
            src="/media/images/IMG_0879.jpg"
            style={{ height: "15rem", borderRadius: "50%", marginLeft : "10rem" }}
          />
          <h4 style={{marginLeft : "10rem"}}>Kshitiz Nagar</h4>
          <p style={{marginLeft : "10rem"}}>Web-developer</p>
        </div>
        <div className="col-6 mt-5" style={{textAlign : "left", width : "35rem"}}>
          <p>
            Kshitiz bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing cricket is his zen.</p>
          <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
