import React from "react";

export function ColorBox() {
  return (
    <div className="colorbox-main">
      <div className="clorbox">
        <div className="color1">
          <h2>Primary</h2>
          <h4>#4e73df</h4>
        </div>
        <div className="color2">
          <h2>success</h2>
          <h4>#1cc88a</h4>
        </div>
        <div className="color3">
          <h2>info</h2>
          <h4>#36b9cc</h4>
        </div>
        <div className="color4">
          <h2>Warning</h2>
          <h4>#f6c23e</h4>
        </div>
        <div className="color5">
          <h2>Danger</h2>
          <h4>#e74a3b</h4>
        </div>
        <div className="color6">
          <h2>Secondary</h2>
          <h4>#858796</h4>
        </div>
        <div className="color7">
          <h2>Light</h2>
          <h4>#f8f9fc</h4>
        </div>

        <div className="color8">
          <h2>dark</h2>
          <h4>5a5c69</h4>
        </div>
      </div>
      <div className="approch">
        <h2>Development Approach</h2>
        <div className="para">
          <p>
            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
            order to reduce CSS bloat and poor page performance. Custom CSS
            classes are used to create custom components and custom utility
            classes.
          </p>
          <p>
            Before working with this theme, you should become familiar with the
            Bootstrap framework, especially the utility classes.
          </p>
        </div>
      </div>
    </div>
  );
}
