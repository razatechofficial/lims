// ChartComponent.tsx
"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface ChartProps {
  isDarkMode: boolean;
}

const ChartComponent: React.FC<ChartProps> = ({ isDarkMode }) => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: isDarkMode
          ? "rgba(255, 99, 132, 1)"
          : "rgba(75, 192, 192, 1)",
        borderColor: isDarkMode
          ? "rgba(255, 99, 132, 0.2)"
          : "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: isDarkMode ? "#ffffff" : "#000000",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? "#ffffff" : "#000000",
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? "#ffffff" : "#000000",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ChartComponent;
