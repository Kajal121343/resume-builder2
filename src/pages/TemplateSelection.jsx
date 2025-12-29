import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTemplate } from "../redux/resumeSlice";
import "../index.css";

export default function TemplateSelection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const templates = [
    { id: 1, img: "/templates/template1.png", type: "Professional" },
    { id: 2, img: "/templates/template2.jpg", type: "Creative" },
    { id: 3, img: "/templates/template3.png", type: "Minimal" },
    { id: 4, img: "/templates/template4.png", type: "Modern" },
  ];

  const choose = (id) => {
    dispatch(setTemplate(id));
    navigate("/personal");
  };

  return (
    <div className="container template-selection">
      {/* Animated Background */}
      <div className="animated-bg"></div>

     
      <header className="header">
        <h1 className="logo">ResumeBuilder</h1>
        <p className="tagline">Craft your dream resume in minutes!</p>
      </header>

     
      <section className="features">
        <div className="feature-card glow">
          <i className="fa-solid fa-paintbrush"></i>
          <h3>Beautiful Designs</h3>
          <p>Templates that make your resume pop and impress recruiters.</p>
        </div>
        <div className="feature-card glow">
          <i className="fa-solid fa-bolt"></i>
          <h3>Fast & Easy</h3>
          <p>Fill in your details and generate a polished resume in minutes.</p>
        </div>
        <div className="feature-card glow">
          <i className="fa-solid fa-mobile-screen-button"></i>
          <h3>Responsive & Modern</h3>
          <p>Looks perfect on desktop, tablet, and mobile devices.</p>
        </div>
      </section>

      {/* Template Selection */}
      <section className="template-page">
        <div className="title-section">
          <h2>Choose Your Template</h2>
          <p className="subtitle">Pick a style that fits your personality</p>
        </div>

        <div className="templates-container">
          {templates.map((t, index) => (
            <div
              key={t.id}
              className="template-card neon-card"
              style={{ "--i": index }}
              onClick={() => choose(t.id)}
            >
              <img src={t.img} alt={`template-${t.id}`} />
              <div className="overlay">
                <span>{t.type} Template</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    
      <section className="cta glow-cta">
        <h3>Ready to get started?</h3>
        <p>Select a template and build your resume effortlessly.</p>
      </section>
    </div>
  );
}
