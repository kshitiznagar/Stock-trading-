import React from "react";
import { Link } from "react-router-dom";
function Universe() {
  return (
    <div className="container p-5">
      <div
        className="row text-center fw-light"
        style={{ margin: "6rem 0rem 6rem 0rem" }}
      >
        <h5 className="fw-light text-muted">
          Want to know more about our technology stack? Check out the{" "}
          <a href="Zerodha.tech">Zerodha.tech</a> blog.
        </h5>
      </div>
      <div className="row text-center">
        <h3 className="text-muted">The Zerodha Universe</h3>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-6 text-center p-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ height: "3.5rem" }}
          />
          <p style={{ fontSize: "0.8rem" }} className="text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-xl-4 col-lg-6 text-center p-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ height: "2.5rem" }}
          />
          <p style={{ fontSize: "0.8rem" }} className="text-muted mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-xl-4 col-lg-6 text-center p-5">
          <img src="media/images/tijori.svg" style={{ height: "3.5rem" }} />
          <p style={{ fontSize: "0.8rem" }} className="text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-6 text-center p-5">
          <img src="media/images/streakLogo.png" style={{ height: "3.5rem" }} />
          <p style={{ fontSize: "0.8rem" }} className="text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-xl-4 col-lg-6 text-center p-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ height: "3.5rem" }}
          />
          <p style={{ fontSize: "0.8rem" }} className="text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-xl-4 col-lg-6 text-center p-5">
          <img src="media/images/dittoLogo.png" style={{ height: "3.5rem" }} />
          <p style={{ fontSize: "0.8rem" }} className="text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }} className="mb-4">
        <Link to="/signup">
          <button
            type="button"
            class="btn btn-primary btn-lg"
            style={{ width: "14rem" }}
          >
            Signup for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;
