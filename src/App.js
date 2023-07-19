import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import Education from "./pages/Education";
import Internship from "./pages/Internship";
import Home from "./pages/Home";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Internship" element={<Internship />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/Certifications" element={<Certifications />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;