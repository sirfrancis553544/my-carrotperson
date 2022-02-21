import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Collection/Slider";
import Navbar from './Navbar/Navbar';
import About from "./About/About";
import App from "./App";
import "./Navbar/navbar.css"
import Rarity from "./Rarity/Rarity";

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
    <h1>Roadmap</h1> 
    <VerticalTimeline />
   
  </React.StrictMode>
  ,
  rootElement
);
