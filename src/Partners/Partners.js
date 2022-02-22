import React from "react";
import "../index.css";

export default function Partners() {
  return (
    <div className="s1">
      <div id="contact" className="main-container">
        <h2>Featured On</h2>
        <div className="partner">
          <a
            href="http://NFTCalendar.io/event/carrotperson/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://nftcalendar.io/assets/logo/nftcalendar-logo.png"
              alt="nft-calendar-log"
            />
          </a>
          <a
            href="https://notfin.com/carrotperson/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://notfin.com/logo/dark_green-notfin.png"
              title="notfin"
              width="130px"
              border="0"
              alt="notfin-log"
            />
          </a>

          <a
            href="https://upcomingnft.net/event/carrotperson"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upcomingnft.net/wp-content/themes/event/assets/imgs/upcomingnft_logo.png"
              alt="upcomingnft-log"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
