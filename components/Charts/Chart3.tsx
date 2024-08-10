// components/BarChart.tsx
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Chart3: React.FC = () => {
  // Define color settings for light and dark modes
  const barColorLight = "#44d4fd";
  const barColorDark = "#3b82f6";

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
    //   foreColor: "#ffff45",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        
      },
    },
    dataLabels: {
      enabled: false,
    },
    
    tooltip: {
      enabled: true,
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
    series: [
      {
        name: "UGV's",
        data: [10, 20, 30, 25, 15, 18], // Sample data for cities
      },
    ],
    colors: [barColorLight],
    xaxis: {
      categories: ["Lahore", "Karachi", "Islamabad", "Quetta", "Peshawar", "Multan"],
      labels: {
        style: {
          colors: "var(--tw-prose-body)",
          fontFamily: "Poppins, sans-serif",
        },
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      labels: {
        style: {
          colors: "var(--tw-prose-body)",
          fontFamily: "Poppins, sans-serif",
        },
      },
    },
    grid: {
      borderColor: "rgba(130, 160, 254, 0.3)",
    },
  };

  return (
    <div className=" relative w-full p-8 rounded-xl shadow-lg bg-white dark:bg-gray-900">
      <h2 className="text-xl font-medium mb-1 text-gray-800 dark:text-white">
        UGV's per City
      </h2>
      <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
        City-wise Distribution
      </p>
      <div className="relative">
        <Chart
          options={chartOptions}
          series={chartOptions.series}
          type="bar"
          height={180}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Chart3;
