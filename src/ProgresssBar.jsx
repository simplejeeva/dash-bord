import React from "react";

export function ProgresssBar() {
  return (
    <div className="mainProgress-container">
      {" "}
      <div className="ProgressBar">
        <h2>PROJECTS</h2>
        <div ClassName="progress-bar">
          <h3>Server Migration</h3>
          <div className="progress"></div>
          <h3>Sales Tracking</h3>
          <div className="progress1"></div>
          <h3>Customer Database</h3>
          <div className="progress2"></div>
          <h3>Payout Details</h3>
          <div className="progress3"></div>
          <h3>Account Details</h3>
          <div className="progress4"></div>
        </div>
      </div>
      <div className="Illustration">
        <h3>Illustrations</h3>
        <img
          className="pic"
          src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
          alt=""
        />
        <p>
          Add some quality, svg illustrations to your project courtesy of
          unDraw, a constantly updated collection of beautiful svg images that
          you can use completely free and without attribution!
        </p>
      </div>
    </div>
  );
}
