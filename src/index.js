import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Collection/Slider";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Team from "./Team/Team";
import Verification from "./Verification/Verification";
import App from "./App";
import "./Navbar/navbar.css";
import Rarity from "./Rarity/Rarity";
import "./index.css";

import VerticalTimeline from "./VerticalTimeline";
import "./Collection/styles.css";
import { Layout, Avatar, Icon } from "antd";
import "antd/dist/antd.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <h1>Collection</h1>
    <Slider />
    <About />
    <Rarity />
    <div className="greeting-wrapper">
      <h1>Roadmap</h1>
      <p>
        CarrotPerson is here to stay, and we want to ensure holders are rewarded
        for being apart of this exciting community.
      </p>
    </div>

    <VerticalTimeline />
    <Team />
    <Verification />
  </React.StrictMode>,
  rootElement
);
