import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Reffearl", 14],
  ["Direct", 7],

  ["Social", 4], // CSS-style declaration
];

export const options = {
  pieHole: 0.7,
  is3D: false,
};

export function Diechart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
