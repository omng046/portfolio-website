import React, { Component } from "react";
import "./home.css";
// import {motion} from 'framer-motion'
export class Education extends Component {
  render() {
    return (
      <>
        <section className="chomu">
          <h1>EDUCATION</h1>
          <br />
          <hr />

          <h2>KENDRIYA VIDYALAY</h2>

          <ul>
            <li>Class topper in 10th</li>
            <li>District topper in 12th</li>
          </ul>
          <br />
          <hr />
          <h2>GOVERNMENT COLLEGE OF ENGINNERING</h2>
          <ul>
            <li>Current GPA:9.999</li>
            <li>CR for period of 2year</li>
          </ul>
        </section>
      </>
    );
  }
}

export default Education;

// initial={{width: 0}}
//     animate={{width:"100%" }}
//       exit={{width: window.innerWidth}}
