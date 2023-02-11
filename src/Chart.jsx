import React from "react";
import "./App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Diechart } from "./Diechart";

export function Chart({ title, data, datakey, grid }) {
  return (
    <div className="cartcontainer">
      <div className="chart">
        <h3 className="charttitle"> EARNING OVERVIEW</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey={datakey} stroke="#5550bd" />
            <Tooltip />
            {grid && <CartesianGrid stoke="#e0dfdf" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="diechart">
        <Diechart />
      </div>
    </div>
  );
}
