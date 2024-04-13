import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import { images } from "../constants";


const SocialMediaFixed = () => (
  <div className="app__social-fixed">
    <Tooltip id="my-tooltip" />
    <a href="https://github.com/marouane-m7b" target="_blank" aria-label="Github Link" rel="noreferrer" data-tooltip-id="my-tooltip" data-tooltip-content="Github">
      <FiGithub />
    </a>
    <a href="https://wa.me/+212706452165" target="_blank" rel="noreferrer" aria-label="Whatsapp Link" data-tooltip-id="my-tooltip" data-tooltip-content="Whatsapp">
      <FaWhatsapp />
    </a>
    <a href="https://www.youtube.com/channel/UCHJaLn_FSc-9LaYRIrzBHWQ" target="_blank" rel="noreferrer" aria-label="Youtube Link" data-tooltip-id="my-tooltip" data-tooltip-content="Youtube">
      <FaYoutube />
    </a>
    <a href={images.cv} download={true}  target="_blank" rel="noreferrer" aria-label="Resume Link"  data-tooltip-id="my-tooltip" data-tooltip-content="Download Resume">
      <FaDownload />
    </a>
  </div>
);

export default SocialMediaFixed;
