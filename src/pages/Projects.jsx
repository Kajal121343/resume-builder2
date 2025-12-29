import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProject, removeProject } from "../redux/resumeSlice";

export default function Projects() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const list = useSelector((state) => state.resume.projects) || [];
  const [project, setProject] = useState({ title: "", description: "" });

  const handleAdd = () => {
    if (!project.title.trim()) return;
    dispatch(addProject({ title: project.title.trim(), description: project.description.trim() }));
    setProject({ title: "", description: "" });
  };

  return (
    <div style={container}>
      <h2 style={title}>Projects</h2>

      <div style={inputWrapper}>
        <input
          type="text"
          placeholder="Project Title"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
          style={inputStyle}
        />
        <textarea
          placeholder="Project Description"
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
          style={{ ...inputStyle, height: 80 }}
        />
        <button onClick={handleAdd} style={btnStyle}>Add Project</button>
      </div>

      <ul style={listStyle}>
        {list.map((p, i) => (
          <li key={i} style={listItem}>
            <strong>{p.title}</strong>: {p.description}
            <button
              onClick={() => dispatch(removeProject(i))}
              style={deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => navigate("/certifications")}
        style={{ ...btnStyle, marginTop: 20 }}
      >
        Next
      </button>
    </div>
  );
}


const container = {
  maxWidth: 500,
  margin: "50px auto",
  padding: 25,
  background: "#fff",
  borderRadius: 8,
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  fontFamily: "Arial, sans-serif",
};

const title = {
  marginBottom: 20,
};

const inputWrapper = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  marginBottom: 20,
};

const inputStyle = {
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid #ccc",
  fontSize: 14,
  width: "100%",
  boxSizing: "border-box",
};

const btnStyle = {
  padding: "10px 18px",
  backgroundColor: "black",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  fontSize: 14,
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const listItem = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 12px",
  background: "#f7f7f7",
  borderRadius: 6,
  marginBottom: 10,
  fontSize: 14,
};

const deleteBtn = {
  background: "#ff4d4f",
  border: "none",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: 4,
  cursor: "pointer",
  fontSize: 12,
};
