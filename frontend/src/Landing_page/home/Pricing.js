import React from "react";
function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="row col-xl-6 col-lg-12 mx-auto">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="">
            See pricing <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="row col-xl-6 col-lg-12">
          <div className="row">
            <div className="col-6 border p-3">
              <h1 className="text-center mb-3">&#x20b9;0</h1>
              <p className="text-center">Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-6 border p-3">
              <h1 className="text-center mb-3">&#x20b9;20</h1>
              <p className="text-center">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
