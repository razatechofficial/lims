"use client";
// components/UGVLineChart.tsx
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const UGVLineChart: React.FC = () => {
  const series = [
    {
      name: "Total UGV's",
      data: [3650, 3650, 3650, 3650, 3650, 3650],
    },
    {
      name: "Active UGV's",
      data: [1300, 1400, 1450, 1500, 1550, 1600],
    },
    {
      name: "Passive UGV's",
      data: [2350, 2250, 2200, 2150, 2100, 2050],
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 450,
      type: "line",
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "UGV Data Over Time",
      align: "center",
      style: {
        fontSize: "16px",
        color: "red",
      },
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // alternating row colors
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    theme: {
      mode: "dark", // This can be dynamically switched to 'dark' for dark mode
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  };

  return (
    <div className="w-full p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default UGVLineChart;
