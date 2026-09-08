import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {

  const [selectedMenu, setSelectedMenu] = useState(0);

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileNavOpen(false); // Close menu on click
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(
      !isProfileDropdownOpen
    );
  };

  const handleLogout = () => {

  localStorage.removeItem("token");

  window.location.href =
    "https://zerodha-mocha.vercel.app";
};

  const menuClass = "menu";

  const activeMenuClass =
    "menu selected";

  return (

    <div className="menu-container">

      <div className="menu-header">
        <img
          src="logo.png"
          alt="logo"
          className="logo"
        />
        <button 
          className="mobile-nav-btn" 
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          ☰
        </button>
      </div>

      <div className={`menus ${isMobileNavOpen ? "open" : ""}`}>

        <ul>

          <li>

            <Link
              style={{
                textDecoration: "none",
              }}
              to="/"
              onClick={() =>
                handleMenuClick(0)
              }
            >

              <p
                className={
                  selectedMenu === 0
                    ? activeMenuClass
                    : menuClass
                }
              >
                Dashboard
              </p>

            </Link>

          </li>

          <li>

            <Link
              style={{
                textDecoration: "none",
              }}
              to="/orders"
              onClick={() =>
                handleMenuClick(1)
              }
            >

              <p
                className={
                  selectedMenu === 1
                    ? activeMenuClass
                    : menuClass
                }
              >
                Orders
              </p>

            </Link>

          </li>

          <li>

            <Link
              style={{
                textDecoration: "none",
              }}
              to="/holdings"
              onClick={() =>
                handleMenuClick(2)
              }
            >

              <p
                className={
                  selectedMenu === 2
                    ? activeMenuClass
                    : menuClass
                }
              >
                Holdings
              </p>

            </Link>

          </li>

          <li>

            <Link
              style={{
                textDecoration: "none",
              }}
              to="/positions"
              onClick={() =>
                handleMenuClick(3)
              }
            >

              <p
                className={
                  selectedMenu === 3
                    ? activeMenuClass
                    : menuClass
                }
              >
                Positions
              </p>

            </Link>

          </li>

          <li>

            <Link
              style={{
                textDecoration: "none",
              }}
              to="/funds"
              onClick={() =>
                handleMenuClick(4)
              }
            >

              <p
                className={
                  selectedMenu === 4
                    ? activeMenuClass
                    : menuClass
                }
              >
                Funds
              </p>

            </Link>

          </li>

          <li>

            <Link
              style={{
                textDecoration: "none",
              }}
              to="/apps"
              onClick={() =>
                handleMenuClick(5)
              }
            >

              <p
                className={
                  selectedMenu === 5
                    ? activeMenuClass
                    : menuClass
                }
              >
                Apps
              </p>

            </Link>

          </li>

        </ul>

        {/* PROFILE */}

        <div className="profile">

          <div
            className="profile-info"
            onClick={handleProfileClick}
          >

            <div className="avatar">
              {localStorage.getItem("username") ? localStorage.getItem("username").substring(0, 2).toUpperCase() : "ZU"}
            </div>

            <p className="username">
              {localStorage.getItem("username") || "USERID"}
            </p>

          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Menu;
