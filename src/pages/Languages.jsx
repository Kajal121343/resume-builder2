import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addLanguage, removeLanguage } from "../redux/resumeSlice";

export default function Languages() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const list = useSelector((state) => state.resume.languages) || [];
  const [lang, setLang] = useState("");

  const handleAdd = () => {
    if (!lang.trim()) return;
    dispatch(addLanguage(lang.trim()));
    setLang("");
  };

  return (
    <div style={container}>
      <h2 style={title}>Languages</h2>

      
      <div style={inputWrapper}>
        <input
          type="text"
          placeholder="Enter language"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          style={inputStyle}
        />
        <button onClick={handleAdd} style={fullButtonStyle}>
          Add
        </button>
      </div>

      
      <ul style={listStyle}>
        {list.map((l, i) => (
          <li key={i} style={listItem}>
            <span>{l}</span>
            <button
              onClick={() => dispatch(removeLanguage(i))}
              style={deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

     
      <button
        onClick={() => navigate("/projects")}
        style={{ ...fullButtonStyle, marginTop: 20 }}
      >
        Next
      </button>
    </div>
  );
}

/* Styles */
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
  gap: 10,
  marginBottom: 20,
};

const inputStyle = {
  flex: 1,
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid #ccc",
  fontSize: 14,
};

const fullButtonStyle = {
  padding: "10px 18px",
  backgroundColor: "black",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  fontSize: 14,
  width: "100%", 
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
  padding: "8px 12px",
  background: "#f7f7f7",
  borderRadius: 6,
  marginBottom: 10,
  fontSize: 14,
};

const deleteBtn = {
  ...fullButtonStyle,
  backgroundColor: "#ff4d4f",
  padding: "4px 8px",
  fontSize: 12,
  width: "auto", 
};
