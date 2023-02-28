import React from "react";
import "./home.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
// import {motion} from 'framer-motion'
function Skill() {
  return (
    <>
      <section className="chomu">
        <h1>Skills</h1>
        <hr />
        <br />
        <br />
        <h3 style={{ color: "#2874A6 " }}>
          {" "}
          <b>PROGRAMMING LANGUAGES AND TOOLS</b>{" "}
        </h3>
        <ul>
          <li style={{ color: "#D35400 " }}>
            <FaHtml5 /> <b>HTML</b>{" "}
          </li>
          <li style={{ color: "#D35400 " }}>
            <FaCss3Alt />
            <b>CSS</b>{" "}
          </li>
          <li style={{ color: "#D35400 " }}>
            <DiJavascript />
            <b>JavaScript</b>{" "}
          </li>
        </ul>
      </section>
    </>
  );
}

export default Skill;

// initial={{opacity: 0}}
//     animate={{opacity: 1}}
//       exit={{opacity: 0}}
