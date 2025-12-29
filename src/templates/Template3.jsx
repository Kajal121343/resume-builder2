import React from "react";

export default function Template3({ data }) {
  const p = data.personal || {};
  const exp = data.experience || [];
  const edu = data.education || [];
  const skills = data.skills || [];
  const languages = data.languages || [];
  const projects = data.projects || [];
  const certifications = data.certifications || [];

  return (
    <div
      style={{
        width: "800px",
        margin: "0 auto",
        background: "#fff",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <h1 style={{ margin: 0, letterSpacing: "1px" }}>
          {p.first} {p.last}
        </h1>
        <p style={{ marginTop: "6px", fontSize: "13px", color: "#555" }}>
          {(p.city || p.state) && `${p.city || ""}, ${p.state || ""}`}
          <br />
          {p.phone} | {p.email}
          <br />
          {p.address}
        </p>
      </div>

      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: "25px",
        }}
      >
       
        <div style={{ borderRight: "2px solid #ccc", paddingRight: "15px" }}>
          {/* EDUCATION */}
          <h3 style={titleStyle}>EDUCATION</h3>
          {edu.length > 0 ? (
            edu.map((e, i) => (
              <div key={i} style={{ marginBottom: "12px" }}>
                <strong>{e.university}</strong>
                <br />
                {e.degree}
                <br />
                <span style={{ fontSize: "12px", color: "#555" }}>
                  {e.start} – {e.end}
                </span>
              </div>
            ))
          ) : (
            <p>No education added.</p>
          )}

          {/* LANGUAGES */}
          <h3 style={{ ...titleStyle, marginTop: "25px" }}>LANGUAGES</h3>
          {languages.length > 0 ? (
            <ul>
              {languages.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          ) : (
            <p>No languages added.</p>
          )}
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* SUMMARY */}
          <h3 style={titleStyle}>PROFESSIONAL SUMMARY</h3>
          <p>{p.summary || "Write your professional summary here..."}</p>

          {/* EXPERIENCE */}
          <h3 style={{ ...titleStyle, marginTop: "25px" }}>
            EXPERIENCE SUMMARY
          </h3>
          {exp.length > 0 ? (
            exp.map((e, i) => (
              <div key={i} style={{ marginBottom: "18px" }}>
                <strong>{e.job}</strong>
                <div style={{ fontSize: "13px" }}>{e.org}</div>
                <div style={{ fontSize: "12px", color: "#666" }}>
                  {e.start} – {e.end}
                </div>
                <p style={{ marginTop: "4px" }}>{e.desc}</p>
              </div>
            ))
          ) : (
            <p>No experience added.</p>
          )}

          {/* SKILLS */}
          <h3 style={{ ...titleStyle, marginTop: "25px" }}>SKILLS</h3>
          {skills.length > 0 ? (
            <ul>
              {skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          ) : (
            <p>No skills added.</p>
          )}

          {/* PROJECTS */}
          <h3 style={{ ...titleStyle, marginTop: "25px" }}>PROJECTS</h3>
          {projects.length > 0 ? (
            projects.map((p, i) => (
              <div key={i} style={{ marginBottom: "12px" }}>
                <strong>{p.title}</strong>
                <p>{p.description}</p>
              </div>
            ))
          ) : (
            <p>No projects added.</p>
          )}

          {/* CERTIFICATIONS */}
          <h3 style={{ ...titleStyle, marginTop: "25px" }}>
            CERTIFICATIONS
          </h3>
          {certifications.length > 0 ? (
            <ul>
              {certifications.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          ) : (
            <p>No certifications added.</p>
          )}
        </div>
      </div>
    </div>
  );
}

const titleStyle = {
  borderBottom: "2px solid #000",
  paddingBottom: "4px",
};
