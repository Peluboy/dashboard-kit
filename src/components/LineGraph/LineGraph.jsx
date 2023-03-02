import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import "./linegrapgh.css";

import Divider1 from "../../assets/images/divider-1.svg";
import Divider2 from "../../assets/images/divider-2.svg";
const LineGraph = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const labels = Array.from({ length: 11 }, (_, i) => i.toString());

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            // label: "Yesterday",
            data: [10, 15, 30, 25, 30, 30, 40, 25, 15, 20],
            fill: false,
            borderColor: "#DFE0EB",
            borderWidth: 1.5,
            tension: 0.4,
          },
          {
            // label: "Today",
            data: [23, 20, 35, 20, 40, 20, 40, 20, 30],
            fill: true,
            borderColor: "#3751FF",
            borderWidth: 1.5,
            backgroundColor: "#3751ff0d",
            tension: 0.4,
          },
        ],
      },

      options: {
        scales: {
          x: {
            grid: {
              display: false,
              type: "category",
              barPercentage: 0.1,
              categoryPercentage: 0.4,
            },
            ticks: {
              maxRotation: 0,
              autoSkip: true,
              //   maxTicksLimit: 10,
            },
          },
          y: {
            position: "right",
            ticks: {
              stepSize: 5,
            },
            grid: {
              borderDash: [2, 0],
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, []);

  return (
    <div className="charts_container">
      <div className="chart">
        <div className="chartHeader">
          <div className="chartTexts">
            <h3>Today's Trend</h3>
            <p>as of 25 May 2019, 09:41 PM</p>
          </div>
          <div className="chartLabels">
            <h4>
              <img src={Divider1} alt="" />
              Today
            </h4>
            <h4>
              <img src={Divider2} alt="" />
              Yesterday
            </h4>
          </div>
        </div>
        <div className="linechart">
          <canvas ref={canvasRef} />
        </div>
      </div>
      <div className="chart_data">
        <div className="chartsData">
          <h4>Resolved</h4>
          <h2>449</h2>
        </div>

        <div className="chartsData">
          <h4>Received</h4>
          <h2>449</h2>
        </div>

        <div className="chartsData">
          <h4>Average first response time</h4>
          <h2>33m</h2>
        </div>

        <div className="chartsData">
          <h4>Average response time</h4>
          <h2>3h 8m</h2>
        </div>

        <div className="chartsData">
          <h4>Resolution within SLA</h4>
          <h2>94%</h2>
        </div>
      </div>
    </div>
  );
};

export default LineGraph;
