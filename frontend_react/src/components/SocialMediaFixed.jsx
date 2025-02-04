import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaGlobe, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import { images } from "../constants";


const SocialMediaFixed = () => (
  <div className="app__social-fixed">
    <Tooltip id="my-tooltip" />
    <a href="https://www.linkedin.com/in/m7b/" target="_blank" rel="noreferrer" aria-label="LinkedIn Link" data-tooltip-id="my-tooltip" data-tooltip-content="LinkedIn Profile">
      <FaLinkedin />
    </a>
    <a href="https://wa.me/+212706452165" target="_blank" rel="noreferrer" aria-label="Whatsapp Link" data-tooltip-id="my-tooltip" data-tooltip-content="Whatsapp">
      <FaWhatsapp />
    </a>
    <a href="https://www.youtube.com/channel/UCHJaLn_FSc-9LaYRIrzBHWQ" target="_blank" rel="noreferrer" aria-label="Youtube Link" data-tooltip-id="my-tooltip" data-tooltip-content="Youtube Channel">
      <FaYoutube />
    </a>
    <a href="https://mostaql.com/u/marouane_m7b" target="_blank" rel="noreferrer" aria-label="Mostaql Link" data-tooltip-id="my-tooltip" data-tooltip-content="Mostaql Profile">
      <FaGlobe />
    </a>
    <a href={images.cv} download={true} target="_blank" rel="noreferrer" aria-label="Resume Link" data-tooltip-id="my-tooltip" data-tooltip-content="Download Resume">
      <FaDownload />
    </a>
  </div>
);

export default SocialMediaFixed;
