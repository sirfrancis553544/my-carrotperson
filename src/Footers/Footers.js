import React from "react";
import "../index.css";

export default function Footer() {
  return (
    <div className="s1">
      <strong>
        <div className="footer">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://opensea.io/collection/carrotperson"
            >
              OpenSea
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/grUEnM23"
            >
              Discord
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/CarrotPersonYC"
            >
              Twitter
            </a>
          </div>
        </div>
      </strong>
      <div className="copyright">
        <p>
          {" "}
          <strong>© {new Date().getFullYear()} YettieClub</strong>
        </p>
      </div>
    </div>
  );
}
