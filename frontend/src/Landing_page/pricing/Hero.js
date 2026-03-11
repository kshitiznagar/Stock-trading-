import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h3 className="mt-5">Charges</h3>
        <h5 className="mt-3 text-muted fw-light">
          List of all charges and taxes
        </h5>
      </div>
      <div className="row mt-5 p-5 text-muted">
        <div className="col-xl-4 col-lg-12 text-center p-5">
          <img src="/media/images/pricing0.svg" />
          <h3>Free equity delivery</h3>
          <p className="mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-xl-4 col-lg-12 text-center p-5">
          <img src="/media/images/other-trades.svg" />
          <h3>Intraday and F&O trades</h3>
          <p className="mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-xl-4 col-lg-12 text-center p-5">
          <img src="/media/images/pricing0.svg" />
          <h3>Free direct MF</h3>
          <p className="mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
        <div className="row p-5">
          <h3>Charges for account opening</h3>
          <table
            class="table table-striped fw-lighter mt-4 border"
            style={{ border: "1px gray black" }}
          >
            <thead>
              <tr>
                <th>Type of account</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Online account</th>
                <th>
                  <p
                    style={{
                      backgroundColor: "#4caf50",
                      width: "3rem",
                      height: "1.5rem",
                    }}
                  >
                    FREE
                  </p>
                </th>
              </tr>
              <tr>
                <th>Offline account</th>
                <th>
                  <p
                    style={{
                      backgroundColor: "#4caf50",
                      width: "3rem",
                      height: "1.5rem",
                    }}
                  >
                    FREE
                  </p>
                </th>
              </tr>
              <tr>
                <th>NRI account (offline only)</th>
                <th>₹ 500</th>
              </tr>
              <tr>
                <th>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </th>
                <th>₹ 500</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row p-5">
          <h3>Demat AMC (Annual Maintenance Charge)</h3>
          <table
            class="table table-striped fw-lighter mt-4 border"
            style={{ border: "1px gray black" }}
          >
            <thead>
              <tr>
                <th>Value of holdings</th>
                <th>AMC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Up to ₹4 lakh</th>
                <th>
                  <p
                    style={{
                      backgroundColor: "#4caf50",
                      width: "3rem",
                      height: "1.5rem",
                    }}
                  >
                    FREE
                  </p>
                </th>
              </tr>
              <tr>
                <th>₹4 lakh - ₹10 lakh</th>
                <th>₹ 100 per year, charged quarterly*</th>
              </tr>
              <tr>
                <th>Above ₹10 lakh</th>
                <th>₹ 300 per year, charged quarterly</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Hero;
