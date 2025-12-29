import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";

import TemplateSelection from "./pages/TemplateSelection";
import PersonalInfo from "./pages/PersonalInfo";
import WorkExperience from "./pages/WorkExperience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Languages from "./pages/Languages";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import ResumePreview from "./pages/ResumePreview";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TemplateSelection />} />
      <Route path="/personal" element={<PersonalInfo />} />
      <Route path="/experience" element={<WorkExperience />} />
      <Route path="/education" element={<Education />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/languages" element={<Languages />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/preview" element={<ResumePreview />} />
    </Routes>
  );
}
