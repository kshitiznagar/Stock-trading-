import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="border-top footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="/media/images/logo.svg" style={{ height: "1.2rem" }} />
            <p
              className="muted-text fw-light mt-3"
              style={{ fontSize: "0.8rem" }}
            >
              &copy; 2010 - 2026, Zerodha Broking Ltd.<br></br>All rights
              reserved.
            </p>
            <div className="socials fs-5 mt-2">
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="border-bottom mt-3 mb-3"></div>
            <div className="socials fs-5">
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-telegram"></i>
            </div>
            <div className="row">
              <div className="col-6 google-btn mt-4">
                <Link to="https://play.google.com/store/games?hl=en_IN"><img src="/media/images/google-play-badge-light.svg"/></Link>
              </div>
              <div className="col-6 apple-btn mt-4">
                <Link to="https://www.apple.com/in/app-store/"><img src="/media/images/appstore-badge-light.svg"/></Link>
              </div>
            </div>
          </div>
          <div className="col f-list">
            <ul>
              <p>Accounts</p>
              <li>
                <a href="">Open demat account</a>
              </li>
              <li>
                <a href="">Minor demat account</a>
              </li>
              <li>
                <a href="">NRI demat account</a>
              </li>
              <li>
                <a href="">Commodity</a>
              </li>
              <li>
                <a href="">Dematerialisation</a>
              </li>
              <li>
                <a href="">Fund transfer</a>
              </li>
              <li>
                <a href="">MTF</a>
              </li>
              <li>
                <a href="">Referral program</a>
              </li>
            </ul>
          </div>
          <div className="col  f-list">
            <ul>
              <p>Support</p>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Support portal</a>
              </li>
              <li>
                <a href="">How to file a complaint?</a>
              </li>
              <li>
                <a href="">Status of your complaints</a>
              </li>
              <li>
                <a href="">Bulletin</a>
              </li>
              <li>
                <a href="">Circular</a>
              </li>
              <li>
                <a href="">Z-Connect blog</a>
              </li>
              <li>
                <a href="">Downloads</a>
              </li>
            </ul>
          </div>
          <div className="col  f-list">
            <ul>
              <p>Company</p>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Philosophy</a>
              </li>
              <li>
                <a href="">Press & media</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Zerodha Cares (CSR)</a>
              </li>
              <li>
                <a href="">Zerodha.tech</a>
              </li>
              <li>
                <a href="">Open source</a>
              </li>
            </ul>
          </div>
          <div className="col  f-list">
            <ul>
              <p>Quick links</p>
              <li>
                <a href="">Upcoming IPOs</a>
              </li>
              <li>
                <a href="">Brokerage charges</a>
              </li>
              <li>
                <a href="">Market holidays</a>
              </li>
              <li>
                <a href="">Economic calendar</a>
              </li>
              <li>
                <a href="">Calculators</a>
              </li>
              <li>
                <a href="">Markets</a>
              </li>
              <li>
                <a href="">Sectors</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="f-text-btm">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to
            <a href=""> complaints@zerodha.com</a>, for DP related to{" "}
            <a href="">dp@zerodha.com</a>. Please ensure you carefully read the
            Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p className="f-text-btm">
            Procedure to file a complaint on <a href="">SEBI SCORES:</a>{" "}
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p className="f-text-btm">
            <a href="">Smart Online Dispute Resolution </a>|
            <a href=""> Grievances Redressal Mechanism</a>
          </p>
          <p className="f-text-btm">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p className="f-text-btm">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p className="f-text-btm">
            India's largest broker based on networth as per NSE.{" "}
            <a href="">NSE broker factsheet</a>
          </p>
          <p className="f-text-btm">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please{" "}
            <a href="">create a ticket here.</a>
          </p>
          <p className="f-text-btm">
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
        <div className="container footer-links">
          <a href="">NSE</a>
          <a href="">BSE</a>
          <a href="">MCX</a>
          <a href="">Terms & conditions</a>
          <a href="">Policies & procedures</a>
          <a href="">Disclosure</a>
          <a href="">For investor's attention</a>
          <a href="">Investor charter</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
