import React from "react";
import "./glitch.css";

export default function CarrotPerson() {
  return (
    <div>
      <div className="glitch-wrapper">
        <div
          style={{ fontSize: "10vw" }}
          className="glitch"
          data-text="CARROTPERSON"
        >
          CARROTPERSON
        </div>
      </div>
    </div>
  );
}
