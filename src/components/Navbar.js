import React from "react";

import "./navstyle.css";
import pic11 from "./pic11.jpg";
import { Link } from "react-router-dom";
function navbar() {
  return (
    <>
      <div className="mysidebar">
        <img src={pic11} alt="face" />
        <Link to="/">Home</Link>
        <Link to="/skill">Skills</Link>
        <Link to="/education">Education</Link>
        <Link to="/contact">Contacts</Link>
        <Link to="/review">Review Me</Link>

      </div>
    </>
  );
}

export default navbar;
