import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Collection/Slider";
import Navbar from "./Navbar/Navbar";
import CarrotPerson from "./CarrotPerson/CarrotPerson";
import About from "./About/About";
import Partners from "./Partners/Partners";
import Team from "./Team/Team";
import Verification from "./Verification/Verification";
import Footer from "./Footers/Footers";
import "./Navbar/navbar.css";
import Rarity from "./Rarity/Rarity";

import VerticalTimeline from "./VerticalTimeline";
import "./Collection/styles.css";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Navbar />

    <CarrotPerson />
    <Slider />
    <About />
    <Rarity />

    <div className="s2 greeting-wrapper">
      <h1>Roadmap</h1>
      <VerticalTimeline />
    </div>
    <Partners />
    <Team />
    <Verification />
    <Footer />
  </React.StrictMode>,
  rootElement
);
