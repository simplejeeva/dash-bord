import React from "react";
import TodaySharpIcon from "@mui/icons-material/TodaySharp";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";

export function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featureditem">
        <span className="featuredtittle">EARNINGS(MONTHLY)</span>
        <div className="featuredmonycontainer">
          <span className="featuredmoney">$40,000</span>
          <div className="icon">
            <TodaySharpIcon />
          </div>
        </div>
      </div>

      <div className="featureditem">
        <span className="featuredtittle">EARNINGS(ANNUAL)</span>
        <div className="featuredmonycontainer">
          <span className="featuredmoney">$215.000</span>
          <div className="icon">
            <AttachMoneySharpIcon />
          </div>
        </div>
      </div>
      <div className="featureditem">
        <span className="featuredtittle">TASKS</span>
        <div className="featuredmonycontainer">
          <span className="featuredmoney">$2,415</span>
        </div>
      </div>
      <div className="featureditem">
        <span className="featuredtittle">PENDING REQUEST</span>
        <div className="featuredmonycontainer">
          <span className="featuredmoney">18</span>
        </div>
      </div>
    </div>
  );
}
