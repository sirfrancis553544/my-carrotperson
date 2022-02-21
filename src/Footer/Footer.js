import React from "react";
import "../index.css";

export default function Footer() {
  var year = new Date();

  document.getElementById(
    "thisYear"
  ).innerHTML = `<div> <strong>©</strong> ${year.getFullYear()} YettieClub</div>`;

  return (
    <div className="main-container">
      <strong>
        <div className="footer">
          <div>
            <a href="#about">About</a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://opensea.io/collection/carrotperson"
            >
              OpenSea
            </a>
          </div>
          <div>
            <a target="_blank" href="https://discord.gg/grUEnM23">
              Discord
            </a>
          </div>
          <div>
            <a target="_blank" href="https://twitter.com/CarrotPersonYC">
              Twitter
            </a>
          </div>
        </div>
      </strong>
      <div className="copyright">
        <p id="thisYear"></p>
      </div>
    </div>
  );
}
