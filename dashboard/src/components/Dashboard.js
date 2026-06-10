import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";

import Apps from "./App";
import Funds from "./Funds";
import Holdings from "./Holding";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {

  const [showSidebar, setShowSidebar] =
    useState(false);

  return (

    <div className="dashboard-container">

      {/* MOBILE MENU BUTTON */}

      <button
        className="mobile-menu-btn"
        onClick={() =>
          setShowSidebar(!showSidebar)
        }
      >
        ☰
      </button>

      {/* SIDEBAR */}

      <aside
        className={
          showSidebar
            ? "dashboard-sidebar mobile-show"
            : "dashboard-sidebar"
        }
      >

        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>

      </aside>

      {/* MAIN CONTENT */}

      <main className="dashboard-content">

        <Routes>

          <Route
            exact
            path="/"
            element={<Summary />}
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/holdings"
            element={<Holdings />}
          />

          <Route
            path="/positions"
            element={<Positions />}
          />

          <Route
            path="/funds"
            element={<Funds />}
          />

          <Route
            path="/apps"
            element={<Apps />}
          />

        </Routes>

      </main>

    </div>
  );
};

export default Dashboard;