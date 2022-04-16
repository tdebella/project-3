import React from "react";

function LeftComp() {
  return (
    <div className="left-hand-wrapper">
      <div className="header">
        <img
          src={process.env.PUBLIC_URL + "/huddle-landing/images/logo.svg"}
          alt="logo"
        />
        <h1>Huddle</h1>
      </div>
      <div className="hero-img">
        <img
          src={
            process.env.PUBLIC_URL +
            "/huddle-landing/images/illustration-mockups.svg"
          }
          alt="mockups-img"
        />
      </div>
    </div>
  );
}

export default LeftComp;
