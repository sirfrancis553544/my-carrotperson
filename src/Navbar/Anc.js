import React, { Component } from "react";
import "./navbar.css";

class Anc extends Component {
  constructor(props) {
    super(props);
    this.myfun.bind(this);
  }
  myfun = function (ele) {
    let offsetTop = document.getElementById(ele).offsetTop;
    window.scrollTo({
      top: offsetTop - 100,
      behavior: "smooth",
    });
  };
  render() {
    return (
      <div>
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title">YettieClub</div>
          </div>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div class="nav-links">
            <span  onClick={() => this.myfun("1")}>
              Minting
            </span>
            <span onClick={() => this.myfun("2")}>
              About Us
            </span>
            <span   onClick={() => this.myfun("3")}>
              Rarity
            </span>
            <span  onClick={() => this.myfun("4")}>
              Roadmap
            </span>
            <span onClick={() => this.myfun("5")}>
              Team
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Anc;
