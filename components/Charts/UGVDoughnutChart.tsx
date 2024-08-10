// components/UGVDoughnutChart.tsx
"use client"
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const UGVDoughnutChart: React.FC = () => {
  const data = {
    labels: ["Active UGV's", "Passive UGV's"],
    datasets: [
      {
        label: "UGV Status",
        data: [1300, 2350], // 1300 active, remaining are passive
        backgroundColor: ["#34d399", "#f87171"],
        hoverBackgroundColor: ["#10b981", "#ef4444"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          color: "currentColor", // Use current text color for legend
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-center mb-4 text-gray-800 dark:text-gray-200">
          UGV Status
        </h2>
        <div className="relative h-64">
          <Doughnut className="text-red-500" data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default UGVDoughnutChart;
