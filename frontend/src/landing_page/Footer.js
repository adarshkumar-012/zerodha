import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgb(250, 250, 250)",
        borderTop: "1px solid #eee",
      }}
    >
      <div className="container mt-5">
        <div className="row mt-5">

          {/* Logo Section */}
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "60%", marginBottom: "20px" }}
            />

            <p className="text-muted">
              &copy; 2010 - 2027, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            {/* Social Icons */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                fontSize: "28px",
                marginTop: "20px",
              }}
            >
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>

            <hr />

            <div
              style={{
                display: "flex",
                gap: "20px",
                fontSize: "28px",
              }}
            >
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>

            {/* App Store Buttons */}
            <div className="mt-4 d-flex gap-3">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="google-play"
                style={{ width: "45%" }}
              />

              <img
                src="media/images/appstoreBadge.svg"
                alt="app-store"
                style={{ width: "45%" }}
              />
            </div>
          </div>

          {/* Account */}
          <div className="col">
            <h4 className="footer-heading">Account</h4>

            <a href="" className="footer-link">Open demat account</a>
            <a href="" className="footer-link">Minor demat account</a>
            <a href="" className="footer-link">NRI demat account</a>
            <a href="" className="footer-link">HUF demat account</a>
            <a href="" className="footer-link">Commodity</a>
            <a href="" className="footer-link">Dematerialisation</a>
            <a href="" className="footer-link">Fund transfer</a>
            <a href="" className="footer-link">MTF</a>
          </div>

          {/* Support */}
          <div className="col">
            <h4 className="footer-heading">Support</h4>

            <a href="" className="footer-link">Contact us</a>
            <a href="" className="footer-link">Support portal</a>
            <a href="" className="footer-link">How to file a complaint?</a>
            <a href="" className="footer-link">Status of your complaints</a>
            <a href="" className="footer-link">Bulletin</a>
            <a href="" className="footer-link">Circular</a>
            <a href="" className="footer-link">Z-Connect blog</a>
            <a href="" className="footer-link">Downloads</a>
          </div>

          {/* Company */}
          <div className="col">
            <h4 className="footer-heading">Company</h4>

            <a href="" className="footer-link">About</a>
            <a href="" className="footer-link">Philosophy</a>
            <a href="" className="footer-link">Press & media</a>
            <a href="" className="footer-link">Careers</a>
            <a href="" className="footer-link">Zerodha Cares (CSR)</a>
            <a href="" className="footer-link">Zerodha.tech</a>
            <a href="" className="footer-link">Open source</a>
            <a href="" className="footer-link">Referral program</a>
          </div>

          {/* Quick Links */}
          <div className="col">
            <h4 className="footer-heading">Quick links</h4>

            <a href="" className="footer-link">Upcoming IPOs</a>
            <a href="" className="footer-link">Brokerage charges</a>
            <a href="" className="footer-link">Market holidays</a>
            <a href="" className="footer-link">Economic calendar</a>
            <a href="" className="footer-link">Calculators</a>
            <a href="" className="footer-link">Markets</a>
            <a href="" className="footer-link">Sectors</a>
            <a href="" className="footer-link">Gift Nifty</a>
          </div>
        </div>

        {/* Bottom Text */}
        <div
          className="mt-5 text-muted"
          style={{
            fontSize: "14px",
            lineHeight: "2",
          }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
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
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>

          {/* Bottom Links */}
          <div
            className="d-flex flex-wrap justify-content-center gap-3 mt-5 mb-4"
          >
            <a href="" className="footer-link">NSE</a>
            <a href="" className="footer-link">BSE</a>
            <a href="" className="footer-link">MCX</a>
            <a href="" className="footer-link">MSEI</a>
            <a href="" className="footer-link">Terms & conditions</a>
            <a href="" className="footer-link">Policies & procedures</a>
            <a href="" className="footer-link">Privacy policy</a>
            <a href="" className="footer-link">Disclosure</a>
            <a href="" className="footer-link">For investor's attention</a>
            <a href="" className="footer-link">Investor charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;