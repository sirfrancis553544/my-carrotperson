import React from "react";
import CarrotPerson from "./CarrotPerson/CarrotPerson";
import "./Collection/styles.css";
import Navbar from "./Navbar/Navbar";
import Slider from "./Collection/Slider";
import About from "./About/About";
import Rarity from "./Rarity/Rarity";
import VerticalTimeline from "./Roadmap/VerticalTimeline";
import Partners from "./Partners/Partners";
import Team from "./Team/Team";
import Verification from "./Verification/Verification";
import Footer from "./Footers/Footers";

export default function App() {
  return (
    <>
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
    </>
  );
}
