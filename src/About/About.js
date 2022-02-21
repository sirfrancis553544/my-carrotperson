import React from "react";
import "../index.css";

export default function About() {
  return (
    <div className="main-container">
      <div className="about-wrapper">
        <div id="about" className="about-me">
          <h2>About Carrot Person</h2>
          <img
            className="thumbnail2"
            src="https://bafybeihqy23votfihobdo2jaiw2rh2y6vl5iuyvepygvhr3w5d4gzgexbu.ipfs.dweb.link/2511.png"
            alt="CarrotPerson#0,NFT,YettieClub"
            data-aos="zoom-in"
            data-aos-duration="1500"
          />
        </div>
        <div className="social-link">
          <p>They say when you play with fire you get burnt.</p>
          <p>
            The Carrot Universe has collided with ours and now they are here.
          </p>
          <p>
            Unknown to the Carrots one of their own caused this and wants to see
            this and every other universe destroyed.
          </p>
          <p>
            Help the carrots go back home and save their universe while stopping
            the mysterious carrot from destroying everything.
          </p>
          <p>
            <a href="https://opensea.io/collection/carrotperson" target="_blank">
              {/* <Button> Link Button </Button> */}
              Shop on OpenSea
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
