import React, { useState, useEffect, Profiler } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { ReactComponent as SchoolIcon } from "./school.svg";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as StarIcon } from "./starIcon.svg";

const TimeLine = ({ heading, message, img, imageSize }) => {
  return (
    <div
      id="timelin"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "black" }}
    >
      <div className="container container-fluid">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="row">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2021 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Data Officer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Addis Ababa, Ethiopia
              </h4>
              <p>Minab Technologies Sc.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2021 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Computer Science and Technology University</h3>
              <h4 className="vertical-timeline-element-subtitle">
                BSc. 
              </h4>
              <p>Adama, Ethiopia</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
