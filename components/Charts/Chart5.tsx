"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Chart5: React.FC = () => {


  const [isMounted, setIsMounted] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  //Revenue Chart
  const revenueChart: any = {
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
    options: {
      chart: {
        height: 325,
        type: "area",
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
      dropShadow: {
        enabled: true,
        opacity: 0.2,
        blur: 10,
        left: -7,
        top: 22,
      },
      colors: isDark
        ? ["#2196F3", "#E7515A", "#32c50e"]
        : ["#1B55E2", "#E7515A", "#32c50e"],
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
          offsetX: isRtl ? 2 : 0,
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
          offsetX: isRtl ? -30 : -10,
          offsetY: 0,
          style: {
            fontSize: "12px",
            cssClass: "apexcharts-yaxis-title",
          },
        },
        opposite: isRtl ? true : false,
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
          width: 10,
          height: 10,
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
          inverseColors: !1,
          opacityFrom: isDark ? 0.19 : 0.28,
          opacityTo: 0.05,
          stops: isDark ? [100, 100] : [45, 100],
        },
      },
    },
  };

  return (
    <>
      <div>
        <div className="relative rounded-md bg-white p-5 shadow dark:bg-gray-900 h-full ">
          <div className="mb-5 flex items-center justify-between dark:text-white-light">
            <h5 className="text-lg font-semibold">UGV's Report</h5>
          </div>
          <p className="text-lg dark:text-white-light/90">
            Total Active <span className="ml-2 text-primary">3545</span>
          </p>
          <div className="relative">
            <div className="rounded-lg bg-white dark:bg-gray-900">
            
            
              {isMounted ? (
                <ReactApexChart
                  series={revenueChart.series}
                  options={revenueChart.options}
                  type="area"
                  height={325}
                  width={"100%"}
                />
              ) : (
                <div className="grid min-h-[325px] place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
                  <span className="inline-flex h-5 w-5 animate-spin rounded-full  border-2 border-black !border-l-transparent dark:border-white"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart5;
