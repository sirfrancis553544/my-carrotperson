import React from "react";
import ReactDOM from "react-dom";
import { VerticalTimeline, VerticalTimelineElement } from "./Roadmap";
import "./Roadmap/VerticalTimeline.css";
import "./Roadmap/VerticalTimelineElement.css";

import { MdFavorite, MdExtension } from "react-icons/md";

function Timeline() {
  return (
    <VerticalTimeline animate={false}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#fff", color: "#f22f46" }}
        icon={<MdExtension />}
      >
        <h3 className="vertical-timeline-element-title">Project Launch</h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
          <li>Create 8450 CarrotPerson</li>
          <li>Funding Website, Discord & Socials </li>
          <li>Public Sales on OpenSea</li>
          <li>
            Collaborated with{" "}
            <a
              target="_blank"
              href="https://opensea.io/collection/carrotpersonspecial-kc"
            >
              Kanairo Collective
            </a>{" "}
            & minted 10 special edition CarrotPerson for them.
          </li>
          <li>
            40% of royalties will be distributed to CarrotPerson holders
            annually
          </li>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#fff", color: "#f22f46" }}
        icon={<MdFavorite />}
      >
        <h3 className="vertical-timeline-element-title">Phase 1</h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
          <li>Team is recruited for community building. </li>
          <li>Feedback is gathered, and strategy shaped by community. </li>
          <li>
            10% sold wallet with the highest purchase quantity get a free NFT at
            the end of the year.  
          </li>
          <li>85 CarrotPerson will be set aside for giveaways.</li>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#fff", color: "#f22f46" }}
        icon={<MdFavorite />}
      >
        <h3 className="vertical-timeline-element-title">Phase 2</h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
          <li>
            Concentrating on promotion to grow online presence, project
            attention and floor price.
          </li>
          <li>
            10% of the fund will be spent on advertisements and marketing.
          </li>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#fff", color: "#f22f46" }}
        icon={<MdFavorite />}
      >
        <h3 className="vertical-timeline-element-title">Phase 3</h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
          {" "}
          <li>
            50% sold Holders are automatically whitelisted for future launches.
          </li>
          <li>
            Exclusive discord channel will be created for owners only to vote on
            future strategies and goals.
          </li>
          <li>
            10 CarrotPerson will be randomly given away to NFT owners as a thank
            you for early supporters.  
          </li>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "#fff", color: "#f22f46" }}
        icon={<MdFavorite />}
      >
        <h3 className="vertical-timeline-element-title">Phase 4</h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
          <li>
            75% sold develops the CarrotPerson comic that tells the story of how
            they ended up lost in our universe.{" "}
          </li>
          <li>We will develop a 2D CarrotPerson game with web3 integration</li>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "#fff", color: "#f22f46" }}
        icon={<MdFavorite />}
      >
        <h3 className="vertical-timeline-element-title">Phase 5</h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
          <li>100% sold CarrotPerson holders merch store will be launched. </li>
          <li>Comic NFT giveaway.</li>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "#fff", color: "#f22f46" }}
        icon={<MdFavorite />}
      >
        <h3 className="vertical-timeline-element-title"></h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
          We are open to feedback and your creative ideas; you are welcome to
          share it on our discord.{" "}
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
