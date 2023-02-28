import React from "react";
import { Route, useLocation, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Education from "../pages/Education";
import Skill from "../pages/Skill";
import Contact from "../pages/Contact";
import Review from "../pages/Review";
import { AnimatePresence } from "framer-motion";

function Animatedroutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/education">
          <Education />
        </Route>

        <Route path="/skill">
          <Skill />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
        
        <Route path="/review">
          <Review/>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default Animatedroutes;

// import ReactDOM from 'react-dom/client';
// location={location} key={location.pathname}
