import FaceSharpIcon from "@mui/icons-material/FaceSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import React from "react";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">SB ADMIN</span>
          <div className="search">
            <TextField id="outlined-basic" label="Search" variant="outlined" />
            <Button variant="contained">search</Button>
          </div>
        </div>
        <div className="topright">
          <div className="topbarIconscontainer">
            <EmailSharpIcon />
            <span className="topiconbadge">3</span>{" "}
          </div>
          <div className="topbarIconscontainer">
            <NotificationsNoneSharpIcon />
            <span className="topiconbadge">4</span>{" "}
          </div>
          <div className="topbarIconscontainer">
            <Button variant="contained" className="profile">
              jeeva <FaceSharpIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
