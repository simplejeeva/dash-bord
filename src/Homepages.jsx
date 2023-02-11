import React from "react";
import "./App.css";
import { Chart } from "./Chart";
import { FeaturedInfo } from "./FeaturedInfo";
import { userdata } from "./dammydata";

import { ProgresssBar } from "./ProgresssBar";
import { ColorBox } from "./ColorBox";

export function Homepages() {
  return (
    <div className="home">
      <FeaturedInfo />
      <div className="charthome">
        <Chart
          data={userdata}
          title="EARNING OVERVIEW"
          grid
          datakey="Active User"
        />

        <div className="Diechart"></div>
      </div>
      <ProgresssBar />
      <ColorBox />
    </div>
  );
}


