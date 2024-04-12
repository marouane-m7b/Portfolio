import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./Experience.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const experienceQuery = '*[_type == "experiences"]';

    client.fetch(experienceQuery).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Experience <span>&</span> Education
      </h2>
      <div style={{ textAlign: "center", width: "80vw", marginTop: "2rem" }}>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2011"
            iconStyle={{ background: "var(--gray-color)", color: "#fff" }}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__skills-exp"),
  "experience",
  "app__primarybg"
);
