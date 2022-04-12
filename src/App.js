import React from "react";
import CarrotPerson from "./CarrotPerson/CarrotPerson";

import Navbar from "./Navbar/Navbar";
import Slider from "./Collection/Slider";
import About from "./About/About";
import Rarity from "./Rarity/Rarity";
import VerticalTimeline from "./VerticalTimeline";
import Partners from "./Partners/Partners";
import Team from "./Team/Team";
import Verification from "./Verification/Verification";
import Footer from "./Footers/Footers";

import "./Collection/styles.css";
import "./index.css";
export default function App() {
  return (
    <>
      <Navbar />
      <CarrotPerson />
      <Slider />
      <About />
      <Rarity />
      <div className="s2 greeting-wrapper">
        <h2>Roadmap</h2>
        <VerticalTimeline />
      </div>
      <Partners />
      <Team />
      <Verification />
      <Footer />
    </>
  );
}
