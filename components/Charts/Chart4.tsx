// components/BarChart.tsx
"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { ChartLoader } from "../ui/Loader";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Chart4: React.FC = () => {
  // Define bar colors based on the current theme
  const barColorLight = "#54d9fd"; // Blue color for light theme
  const barColorDark = "#32c50e"; // Green color for dark theme
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      offsetY: 0,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"],
      labels: {
        style: {
          colors: "var(--tw-prose-body)",
          fontFamily: "Poppins, sans-serif",
        },
      },
    },
    yaxis: {
      title: {
        text: "Number of UGVs",
        style: {
          color: "var(--tw-prose-body)",
          fontFamily: "Poppins, sans-serif",
        },
      },
    },
    grid: {
      borderColor: "rgba(130, 160, 254, 0.3)",
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
      style: {
        fontFamily: "Poppins, sans-serif",
      },
      y: {
        formatter: (value: number) => `${value} UGVs`,
      },
      custom: ({ series, seriesIndex, dataPointIndex }: any) => {
        const value = series[seriesIndex][dataPointIndex];
        return `<div class="p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg rounded">
                  <span>${value} UGVs</span>
                </div>`;
      },
    },
    colors: [barColorLight],
  };

  const series = [
    {
      name: "UGVs",
      data: [45, 30, 55, 20, 40], // Example data for each city
    },
  ];

  return (
    <div className=" relative w-90 p-8 rounded-xl shadow-lg bg-white dark:bg-gray-900">
      <h2 className="text-xl font-medium mb-1 text-gray-800 dark:text-white">
        UGV's Distribution by City
      </h2>
      <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
        Analysis of UGVs across major cities
      </p>
      <div className="relative">
        {isMounted ? (
          <Chart
            options={chartOptions}
            series={series}
            type="bar"
            height={300}
            width="100%"
          />
        ) : (
          <ChartLoader />
        )}
      </div>
    </div>
  );
};

export default Chart4;
