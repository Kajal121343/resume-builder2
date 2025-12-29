import React from "react";

export default function Template2({ data }) {
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
        fontFamily: "Arial",
        boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
      }}
    >
    
      <div
        style={{
          width: "260px",
          background: "#f1f1f1",
          padding: "25px",
          textAlign: "center",
          borderRight: "2px solid #ddd",
        }}
      >
       
        {p.image && (
          <img
            src={p.image}
            alt="profile"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "15px",
              border: "4px solid #d33",
            }}
          />
        )}

        <h2 style={{ margin: "0", color: "#d33" }}>
          {p.first} {p.last}
        </h2>

        
        <div style={{ fontSize: "13px", marginTop: "10px" }}>
          <p>📧 {p.email}</p>
          <p>📞 {p.phone}</p>
          {p.website && <p>🌐 {p.website}</p>}
          {p.address && <p>🏠 {p.address}</p>}
        </div>

        {/* ABOUT */}
        <h3 style={{ marginTop: "25px", color: "#d33" }}>ABOUT ME</h3>
        <p style={{ fontSize: "13px" }}>
          {p.summary || "Write something about yourself."}
        </p>

       
        <h3 style={{ marginTop: "25px", color: "#d33" }}>SKILLS</h3>
        {skills.length > 0 ? (
          <ul style={{ textAlign: "left" }}>
            {skills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        ) : (
          <p>No skills added.</p>
        )}

        {/* LANGUAGES */}
        <h3 style={{ marginTop: "25px", color: "#d33" }}>LANGUAGES</h3>
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

     
      <div style={{ flex: 1, padding: "30px 35px" }}>
        <h1>{p.first} {p.last}</h1>
        <div style={{ color: "#777" }}>
          {p.city}, {p.state}
        </div>

        <h2 style={sectionTitle}>WORK EXPERIENCE</h2>
        {exp.map((e, i) => (
          <div key={i}>
            <strong>{e.job}</strong>
            <div>{e.org}</div>
            <small>{e.start} – {e.end}</small>
            <p>{e.desc}</p>
          </div>
        ))}

        <h2 style={sectionTitle}>EDUCATION</h2>
        {edu.map((ed, i) => (
          <div key={i}>
            <strong>{ed.degree}</strong>
            <div>{ed.university}</div>
          </div>
        ))}

        <h2 style={sectionTitle}>PROJECTS</h2>
        {projects.map((p, i) => (
          <div key={i}>
            <strong>{p.title}</strong>
            <p>{p.description}</p>
          </div>
        ))}

        <h2 style={sectionTitle}>CERTIFICATIONS</h2>
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

const sectionTitle = {
  color: "#d33",
  marginTop: "25px",
  borderBottom: "2px solid #eee",
};
