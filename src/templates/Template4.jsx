import React from "react";

export default function Template4({ data }) {
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
        fontFamily: "Arial, sans-serif",
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
     
      <div
        style={{
          background: "#0D5C89",
          color: "#fff",
          padding: "28px"
        }}
      >
       
        <div style={{ textAlign: "center" }}>
          {p.image ? (
            <img
              src={p.image}
              alt="profile"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #fff"
              }}
            />
          ) : (
            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "#ccc",
                margin: "0 auto"
              }}
            />
          )}
        </div>

       
        <h2 style={{ textAlign: "center", marginTop: "18px", marginBottom: 0 }}>
          {p.first} {p.last}
        </h2>
        <h4 style={{ textAlign: "center", fontWeight: 300 }}>
          {p.profession || "Your Role"}
        </h4>

       
        <h3 style={{ marginTop: "30px" }}>CONTACT</h3>
        {p.email && <p>📧 {p.email}</p>}
        {p.phone && <p>📞 {p.phone}</p>}
       
        {p.address && <p>🏠 {p.address}</p>}
        {(p.city || p.state) && <p>📍 {p.city}, {p.state}</p>}
       

       
        <h3 style={{ marginTop: "30px" }}>RELEVANT SKILLS</h3>
        {skills.length > 0 ? (
          <ul>
            {skills.map((s, i) => (
              <li key={i} style={{ marginBottom: "6px" }}>
                {s}
              </li>
            ))}
          </ul>
        ) : (
          <p>No skills added.</p>
        )}

       
        <h3 style={{ marginTop: "30px" }}>LANGUAGES</h3>
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

     
      <div style={{ padding: "28px" }}>
       
        <h2 style={{ background: "#E2EDF7", padding: "10px", fontWeight: 600 }}>
          WORK EXPERIENCE
        </h2>
        {exp.length > 0 ? (
          exp.map((e, i) => (
            <div key={i} style={{ marginBottom: "18px" }}>
              <h3 style={{ marginBottom: "4px" }}>{e.job}</h3>
              <div style={{ fontSize: "14px", color: "#444" }}>{e.org}</div>
              <div style={{ fontSize: "12px", color: "#777" }}>
                {e.start} – {e.end}
              </div>
              <ul style={{ marginTop: "8px" }}>
                {(e.desc || "")
                  .split(".")
                  .filter(Boolean)
                  .map((line, index) => (
                    <li key={index} style={{ marginBottom: "6px" }}>
                      {line.trim()}
                    </li>
                  ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No experience added.</p>
        )}

      
        <h2 style={{ background: "#E2EDF7", padding: "10px", marginTop: "20px" }}>
          EDUCATION HISTORY
        </h2>
        {edu.length > 0 ? (
          edu.map((ed, i) => (
            <div key={i} style={{ marginBottom: "18px" }}>
              <h3>{ed.degree}</h3>
              <div>{ed.university}</div>
              <div style={{ fontSize: "12px", color: "#777" }}>
                {ed.start} – {ed.end}
              </div>
            </div>
          ))
        ) : (
          <p>No education added.</p>
        )}

       
        <h2 style={{ background: "#E2EDF7", padding: "10px", marginTop: "20px" }}>
          PROJECTS
        </h2>
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

        
        <h2 style={{ background: "#E2EDF7", padding: "10px", marginTop: "20px" }}>
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
