import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid"
      id="supportHero"
      style={{
        backgroundColor: "#387ed1",
        color: "white",
      }}
    >
      {/* Top */}
      <div
        className="d-flex justify-content-between align-items-center p-5"
      >
        <h4>Support Portal</h4>

        <a
          href="/"
          style={{
            color: "white",
          }}
        >
          Track Tickets
        </a>
      </div>

      {/* Bottom */}
      <div className="row p-5">

        {/* Left */}
        <div className="col-6 p-4">

          <h1
            className="fs-3 mb-4"
            style={{
              lineHeight: "1.6",
            }}
          >
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            placeholder="Eg. how do I activate F&O, why is my order getting rejected ..."
            className="form-control p-3 mb-4"
            style={{
              borderRadius: "3px",
              border: "none",
              fontSize: "17px",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "25px",
              flexWrap: "wrap",
            }}
          >
            <a href="/" className="hero-link">
              Track account opening
            </a>

            <a href="/" className="hero-link">
              Track segment activation
            </a>

            <a href="/" className="hero-link">
              Intraday margins
            </a>

            <a href="/" className="hero-link">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="col-6 p-4">

          <h1 className="fs-3 mb-4">Featured</h1>

          <ol
            style={{
              lineHeight: "2.5",
            }}
          >
            <li>
              <a href="/" className="hero-link">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>

            <li>
              <a href="/" className="hero-link">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;