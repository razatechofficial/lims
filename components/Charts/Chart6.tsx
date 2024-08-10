"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { ChartLoader } from "../ui/Loader";
import { ApexOptions } from "apexcharts";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Chart6: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  
  const UgvChart: ApexOptions = {
    series: [
      {
        name: "Total",
        data: [
          16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000,
          14000, 17000,
        ],
      },
      {
        name: "Active",
        data: [
          16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000,
          18000, 19000,
        ],
      },
      {
        name: "Passive",
        data: [
          18000, 22000, 17200, 19300, 16000, 20000, 13000, 1000, 1600, 29000,
          18000, 19000,
        ],
      },
    ],
    // options: {
    chart: {
      height: 325,
      type: "area" as const, // Explicitly set type
      fontFamily: "Nunito, sans-serif",
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: -40,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
          customIcons: [],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: 2,
      lineCap: "square",
    },

    colors: ["#2196F3", "#E7515A", "#32c50e"],
    markers: {
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 6,
          fillColor: "#1B55E2",
          strokeColor: "transparent",
          size: 7,
        },
        {
          seriesIndex: 1,
          dataPointIndex: 5,
          fillColor: "#E7515A",
          strokeColor: "transparent",
          size: 7,
        },
      ],
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: true,
      },
      labels: {
        offsetX: 0,
        offsetY: 5,
        style: {
          fontSize: "12px",
          cssClass: "apexcharts-xaxis-title",
        },
      },
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: (value: number) => {
          return value / 1000 + "K";
        },
        offsetX: -10,
        offsetY: 0,
        style: {
          fontSize: "12px",
          cssClass: "apexcharts-yaxis-title",
        },
      },
      opposite: false,
    },
    grid: {
      borderColor: "rgba(130, 160, 254, 0.3)",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "16px",
      markers: {
        offsetX: -2,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
    tooltip: {
      marker: {
        show: true,
      },
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.19,
        opacityTo: 0.05,
        stops: [100, 100],
      },
    },
    // },
  };

  return (
    <>
      <div>
        <div className="relative rounded-xl bg-white p-5 shadow-lg dark:bg-gray-900 h-full ">
          {/* <div className="mb-5 flex items-center justify-between dark:text-white-light">
            <h5 className="text-lg font-semibold">UGV's Report</h5>
          </div> */}
          <h2 className="text-xl font-medium mb-1 text-gray-800 dark:text-white">
            UGV's Report
          </h2>
          <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
            Total Active{" "}
            <span className="ml-2 text-sky-600 font-semibold">3545</span>
          </p>

          <div className="relative">
           
              {isMounted ? (
                <ReactApexChart
                  series={UgvChart.series}
                  options={UgvChart}
                  type="area"
                  height={325}
                  width={"100%"}
                />
              ) : (
                <ChartLoader />
              )}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart6;
