// components/Chart.tsx
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Chart2: React.FC = () => {
  const lineColor = "#44d4fd";

  const chartOptions: ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: -10,
        tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
            customIcons: []
          },
      },
      
      zoom: {
        enabled: true,
      },
      offsetY: 0, 
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontFamily: "Poppins, sans-serif",
      },
      y: {
        formatter: (value: number) => `${value}k`,
      },
      custom: ({ series, seriesIndex, dataPointIndex }: any) => {
        const value = series[seriesIndex][dataPointIndex];
        return `<div class="p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg rounded">
                  <span>${value}k</span>
                </div>`;
      },
    },
    series: [
      {
        name: "Stocks",
        data: [15, 50, 18, 90, 30, 65],
      },
    ],
    colors: [lineColor],
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        opacityFrom: 0.7,
        opacityTo: 0,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            opacity: 0.4,
            color: lineColor,
          },
          {
            offset: 100,
            opacity: 0,
            color: lineColor,
          },
        ],
      },
    },
    stroke: {
      colors: [lineColor],
      lineCap: "round",
    },
    grid: {
      borderColor: "rgba(0, 0, 0, 0)",
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 10,
      },
    },
    markers: {
      strokeColors: lineColor,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: "var(--tw-prose-body)",
          fontFamily: "Poppins, sans-serif",
        },
      },
      axisBorder: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      categories: ["Jan", "Mar", "May", "July", "Sept", "Nov"],
    },
  };

  return (
    <div className="card relative w-90 p-8 rounded-xl shadow-lg bg-white dark:bg-gray-900">
      <h2 className="text-xl font-medium mb-1 text-gray-800 dark:text-white">
        UGV's Stocks
      </h2>
      <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
        Month-to-month Comparison
      </p>
      <div className="pulse bg-sky-500 animate-ping absolute h-2 w-2 bg-primary top-12 right-10 rounded-full">
        <span className="block absolute h-full w-full border border-primary rounded-full left-0 top-0 animate-pulse opacity-80 scale-0"></span>
      </div>
      <div className="relative">
        <Chart
          options={chartOptions}
          series={chartOptions.series}
          type="area"
          height={180}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Chart2;
