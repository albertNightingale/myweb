import React from "react";

import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

import Blog from "./pages/Blog";
import Project from "./pages/Project";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
