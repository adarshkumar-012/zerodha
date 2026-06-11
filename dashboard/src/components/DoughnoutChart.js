import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const DoughnoutChart = ({ data = [] }) => {

  // SAFETY CHECK

  if (!data || data.length === 0) {
    return null;
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };
  const chartData = {

    labels: data.map(
      (stock) => stock.name
    ),

    datasets: [

      {

        label: "Stock Price",

        data: data.map(
          (stock) => stock.price
        ),

        backgroundColor: [

          "#4184f3",
          "#ff5722",
          "#4caf50",
          "#9c27b0",
          "#ff9800",
          "#00bcd4",
          "#e91e63",
          "#795548",

        ],

        borderWidth: 1,

      },

    ],

  };


  return (
    <div
      style={{
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <Doughnut
        data={chartData}
        options={options}
      />
    </div>
  );
};
export default DoughnoutChart;