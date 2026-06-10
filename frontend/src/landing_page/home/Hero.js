import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">

        <div className="row align-items-center min-vh-100">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="hero-content">

              <span className="hero-badge">
                India's Largest Stock Broker
              </span>

              <h1 className="hero-title">
                Invest in Everything
              </h1>

              <p className="hero-subtitle">
                Online platform to invest in stocks, derivatives,
                mutual funds, ETFs, bonds, and more.
              </p>

              <div className="hero-buttons">
                <Link to="/signup" className="hero-btn-primary">
                  Get Started
                </Link>

                <Link to="/about" className="hero-btn-secondary">
                  Learn More
                </Link>
              </div>

              {/* STATS */}
              <div className="hero-stats">

                <div className="stat-box">
                  <h3>1Cr+</h3>
                  <p>Users</p>
                </div>

                <div className="stat-box">
                  <h3>₹4L Cr+</h3>
                  <p>Assets</p>
                </div>

                <div className="stat-box">
                  <h3>99.9%</h3>
                  <p>Uptime</p>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6">
            <div className="hero-image-wrapper">

              <img
                src="/media/images/homeHero.png"
                alt="Trading Dashboard"
                className="img-fluid hero-image"
              />

              <div className="floating-card card-1">
                <p>NIFTY 50</p>
                <h5>+2.45%</h5>
              </div>

              <div className="floating-card card-2">
                <p>Portfolio</p>
                <h5>₹2.4L</h5>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;