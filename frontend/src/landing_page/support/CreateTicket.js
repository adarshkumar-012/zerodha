import React from "react";

const supportSections = [
  {
    title: "Account Opening",
    icon: "fa fa-plus-circle",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Charges at Zerodha",
      "Getting Started",
    ],
  },

  {
    title: "Your Zerodha Account",
    icon: "fa fa-user-circle",
    links: [
      "Your Profile",
      "Account modification",
      "Nomination",
      "Transfer of shares",
    ],
  },

  {
    title: "Kite",
    icon: "fa fa-compass",
    links: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility",
      "Charts and Orders",
    ],
  },

  {
    title: "Funds",
    icon: "fa fa-inr",
    links: [
      "Add money",
      "Withdraw money",
      "Add bank account",
      "eMandates",
    ],
  },

  {
    title: "Console",
    icon: "fa fa-copyright",
    links: [
      "Portfolio",
      "Reports",
      "Tax P&L",
      "Corporate Actions",
    ],
  },

  {
    title: "Coin",
    icon: "fa fa-adjust",
    links: [
      "Mutual Funds",
      "NPS",
      "Fixed Deposits",
      "Payments & Orders",
    ],
  },
];

function CreateTicket() {
  return (
    <div
      style={{
        backgroundColor: "#f7f7f7",
        minHeight: "100vh",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #eee",
        }}
      >
        <div className="container p-5">

          {/* Heading */}
          <div className="d-flex justify-content-between align-items-center mb-4">

            <h1
              style={{
                fontSize: "2.7rem",
                fontWeight: "600",
              }}
            >
              Support Portal
            </h1>

            <button className="btn btn-primary px-4 py-2">
              My tickets
            </button>

          </div>

          {/* Search Box */}
          <div className="input-group">

            <span className="input-group-text bg-white border-end-0">
              <i className="fa fa-search"></i>
            </span>

            <input
              type="text"
              className="form-control border-start-0 p-3"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
            />

          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row">

          {/* Left Side */}
          <div className="col-8">

            <div className="accordion" id="supportAccordion">

              {supportSections.map((item, index) => (

                <div
                  className="accordion-item mb-4 border"
                  key={index}
                >

                  <h2 className="accordion-header">

                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      style={{
                        padding: "22px 25px",
                        backgroundColor: "white",
                        boxShadow: "none",
                      }}
                    >

                      <div className="d-flex align-items-center gap-4">

                        <div
                          style={{
                            width: "45px",
                            height: "45px",
                            backgroundColor: "#f5f5f5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "4px",
                          }}
                        >
                          <i
                            className={item.icon}
                            style={{
                              color: "#387ed1",
                              fontSize: "18px",
                            }}
                          ></i>
                        </div>

                        <h5
                          style={{
                            margin: 0,
                            fontWeight: "400",
                          }}
                        >
                          {item.title}
                        </h5>

                      </div>

                    </button>

                  </h2>

                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#supportAccordion"
                  >

                    <div className="accordion-body">

                      {item.links.map((link, idx) => (

                        <a
                          href="/"
                          key={idx}
                          className="support-link d-block mb-3"
                        >
                          {link}
                        </a>

                      ))}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Right Side */}
          <div className="col-4">

            {/* Notice Box */}
            <div
              style={{
                backgroundColor: "#fff7eb",
                borderLeft: "4px solid orange",
                padding: "20px",
                marginBottom: "25px",
              }}
            >

              <ul style={{ margin: 0 }}>

                <li className="mb-4">
                  <a href="/" className="support-link">
                    Surveillance measure on scrips - June 2026
                  </a>
                </li>

                <li>
                  <a href="/" className="support-link">
                    Current Buybacks - June 2026
                  </a>
                </li>

              </ul>

            </div>

            {/* Quick Links */}
            <div className="bg-white border">

              <div
                style={{
                  padding: "15px 20px",
                  borderBottom: "1px solid #eee",
                  backgroundColor: "#fafafa",
                  fontWeight: "500",
                }}
              >
                Quick links
              </div>

              <div
                style={{
                  padding: "18px 20px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <a href="/" className="support-link">
                  1. Track account opening
                </a>
              </div>

              <div
                style={{
                  padding: "18px 20px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <a href="/" className="support-link">
                  2. Track segment activation
                </a>
              </div>

              <div
                style={{
                  padding: "18px 20px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <a href="/" className="support-link">
                  3. Intraday margins
                </a>
              </div>

              <div
                style={{
                  padding: "18px 20px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <a href="/" className="support-link">
                  4. Kite user manual
                </a>
              </div>

              <div style={{ padding: "18px 20px" }}>
                <a href="/" className="support-link">
                  5. Learn how to create a ticket
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default CreateTicket;