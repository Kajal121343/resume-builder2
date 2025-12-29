import React from "react";

export default function Template1({ data }) {
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
        width: "820px",
        margin: "0 auto",
        background: "#fff",
        display: "flex",
        boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        fontFamily: "Arial"
      }}
    >
    
      <div
        style={{
          width: "260px",
          background: "#0f5960",
          color: "#fff",
          padding: "22px",
        }}
      >
     
        {p.image && (
          <img
            src={p.image}
            alt="profile"
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              objectFit: "cover",
              display: "block",
              margin: "0 auto 15px",
              border: "3px solid #fff",
            }}
          />
        )}

      
        <h2 style={{ margin: "0", textAlign: "center" }}>
          {p.first} {p.last}
        </h2>

        {/* Contact */}
        <div style={{ textAlign: "center", fontSize: "13px", marginTop: "6px" }}>
          {p.email && <div>📧 {p.email}</div>}
          {p.phone && <div>📞 {p.phone}</div>}
          {p.address && <div>🏠 {p.address}</div>}
        </div>

        {/* Summary */}
        <h3 style={{ marginTop: "25px" }}>SUMMARY</h3>
        <p style={{ fontSize: "13px", lineHeight: "1.5" }}>
          {p.summary || "Highly motivated professional."}
        </p>

        {/* Skills */}
        <h3 style={{ marginTop: "25px" }}>CORE COMPETENCIES</h3>
        {skills.length > 0 ? (
          <ul style={{ fontSize: "13px", lineHeight: "1.5", paddingLeft: "18px" }}>
            {skills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        ) : (
          <p style={{ fontSize: "13px" }}>No skills added.</p>
        )}

        {/* Languages */}
        <h3 style={{ marginTop: "25px" }}>LANGUAGES</h3>
        {languages.length > 0 ? (
          <ul style={{ fontSize: "13px", lineHeight: "1.5", paddingLeft: "18px" }}>
            {languages.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        ) : (
          <p style={{ fontSize: "13px" }}>No languages added.</p>
        )}
      </div>

    
      <div style={{ flex: 1, padding: "30px 35px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ margin: "0" }}>
              {p.first} {p.last}
            </h1>
            <div style={{ fontSize: "14px", color: "#555" }}>
              {p.city}, {p.state}
            </div>
          </div>

          <div style={{ textAlign: "right", fontSize: "14px" }}>
            {p.phone}
            <br />
            {p.email}
          </div>
        </div>

        {/* Work Experience */}
        <h2 style={{ marginTop: "25px", borderBottom: "2px solid #eee", paddingBottom: "5px" }}>
          WORK EXPERIENCE
        </h2>
        {exp.length > 0 ? (
          exp.map((e, i) => (
            <div key={i} style={{ marginBottom: "15px" }}>
              <div style={{ fontWeight: "bold" }}>{e.job}</div>
              <div style={{ color: "#777" }}>{e.org}</div>
              <div style={{ fontSize: "13px", color: "#999" }}>
                {e.start} – {e.end}
              </div>
              <p style={{ marginTop: "6px" }}>{e.desc}</p>
            </div>
          ))
        ) : (
          <p>No experience added.</p>
        )}

        {/* Education */}
        <h2 style={{ marginTop: "25px", borderBottom: "2px solid #eee", paddingBottom: "5px" }}>
          EDUCATION
        </h2>
        {edu.length > 0 ? (
          edu.map((ed, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              <strong>{ed.degree}</strong>
              <div style={{ color: "#777" }}>{ed.university}</div>
              <div style={{ fontSize: "13px", color: "#999" }}>
                {ed.start} – {ed.end}
              </div>
            </div>
          ))
        ) : (
          <p>No education added.</p>
        )}

        {/* Projects */}
        <h2 style={{ marginTop: "25px", borderBottom: "2px solid #eee", paddingBottom: "5px" }}>
          PROJECTS
        </h2>
        {projects.length > 0 ? (
          projects.map((p, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              <strong>{p.title}</strong>
              <p style={{ marginTop: "4px" }}>{p.description}</p>
            </div>
          ))
        ) : (
          <p>No projects added.</p>
        )}

        {/* Certifications */}
        <h2 style={{ marginTop: "25px", borderBottom: "2px solid #eee", paddingBottom: "5px" }}>
          CERTIFICATIONS
        </h2>
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
  );
}
