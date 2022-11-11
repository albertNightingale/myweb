import React from "react";

import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";

import Blog from "./pages/Blog";
import Project from "./pages/Project";
import About from "./pages/About";
import Resume from "./pages/Resume";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/">
          <Project />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
