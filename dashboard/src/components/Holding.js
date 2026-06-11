import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import DoughnoutChart from "./DoughnoutChart";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "https://zerodha-backend-s8sx.onrender.com/allHoldings",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setAllHoldings(res.data);

        console.log("Holdings Data:", res.data);
      } catch (err) {
        console.log(err);

        if (err.response?.status === 401) {
          alert("Please login first");

          window.location.href =
            "https://zerodha-frontend-yoh0.onrender.com/login";
        }
      }
    };

    fetchHoldings();
  }, []);
    console.log(
    "allHoldings",
    allHoldings,
    Array.isArray(allHoldings)
  );

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  console.log("Chart Data:", data);

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit =
                curValue - stock.avg * stock.qty >= 0;
              const profClass = isProfit
                ? "profit"
                : "loss";
              const dayClass = stock.isLoss
                ? "loss"
                : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>

                  <td className={profClass}>
                    {(curValue -
                      stock.avg * stock.qty).toFixed(2)}
                  </td>

                  <td className={profClass}>
                    {stock.net}
                  </td>

                  <td className={dayClass}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>

        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <div style={{ flex: 2 }}>
          <VerticalGraph data={data} />
        </div>

        <div style={{ flex: 1 }}>
          <DoughnoutChart data={allHoldings} />
        </div>
      </div>
    </>
  );
};

export default Holdings;