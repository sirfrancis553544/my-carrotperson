import React from "react";
import "../Navbar/data";
import "../index.css";

export default function Team() {
  return (
    <div className="s2">
      <div id="/team" className="main-container">
        <h2 className="team">Team</h2>
        <div className="about-wrapper">
          <div id="about" className="about-me">
            <h3 className="teamtitle">Head Carrot</h3>
            <img
              className="thumbnail2"
              src="https://bafybeihqy23votfihobdo2jaiw2rh2y6vl5iuyvepygvhr3w5d4gzgexbu.ipfs.dweb.link/1.png"
              alt="CarrotPerson#00,NFT,YettieClub"
            />
            <p>
              {" "}
              <br /> Jack of all trades, designer and developer.
            </p>
          </div>
          <div className="about-me">
            <h3 className="teamtitle">PR</h3>
            <img
              className="thumbnail2"
              src="https://bafybeihqy23votfihobdo2jaiw2rh2y6vl5iuyvepygvhr3w5d4gzgexbu.ipfs.dweb.link/8389.png"
              alt="CarrotPerson#00,NFT,YettieClub"
            />
            <p>
              {" "}
              <br />
              Developer, Likes hiking and has a terrible twitter addiction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
