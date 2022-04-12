import React from "react";
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
        <p>
          <li>Create 8450 CarrotPerson</li>
          <li>Website, Discord & Socials. </li>
          <li>Public Sales on OpenSea. </li>
          <li>
            Collaborated with{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://opensea.io/collection/carrotpersonspecial-kc"
            >
              Kanairo Collective
            </a>{" "}
            & minted 10 special edition CarrotPerson for them.
          </li>
          <li>
            30% of royalties will be distributed to CarrotPerson holders
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
        <p>
       
          <li>Free minting. </li>
          <li>Promotion. </li>
          <li>
          Team is recruited for community building. 
          </li>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#fff", color: "#f22f46" }}
        icon={<MdFavorite />}
      >
        <h3 className="vertical-timeline-element-title">Phase 2</h3>
        <p>
          <li>
          50% minted holders are automatically whitelisted for future launches.
          </li>
          <li>
          Exclusive discord channel will be created for owners only to vote on future strategies and goals. 
          </li>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#fff", color: "#f22f46" }}
        icon={<MdFavorite />}
      >
        <h3 className="vertical-timeline-element-title">Phase 3</h3>
        <p>
          {" "}
          <li>
          75% minted CarrotPerson game start development with web3 integration. 
          </li>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "#fff", color: "#f22f46" }}
        icon={<MdFavorite />}
      >
        <h3 className="vertical-timeline-element-title">Phase 4</h3>
        <p>
          <li>
          100% minted comic NFT giveaway.
          </li>
     
        </p>
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "#fff", color: "#f22f46" }}
        icon={<MdFavorite />}
      >
          <li>
            We are open to feedback and your creative ideas; you are welcome to
            share it on our discord.
          </li>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
