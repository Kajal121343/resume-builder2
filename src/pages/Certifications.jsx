import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCertification, removeCertification } from "../redux/resumeSlice";

export default function Certifications() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const list = useSelector((state) => state.resume.certifications) || [];
  const [cert, setCert] = useState("");

  const handleAdd = () => {
    if (!cert.trim()) return;
    dispatch(addCertification(cert.trim()));
    setCert("");
  };

  return (
    <div style={container}>
      <h2 style={title}>Certifications</h2>

      <div style={inputWrapper}>
        <input
          type="text"
          placeholder="Enter certification"
          value={cert}
          onChange={(e) => setCert(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleAdd} style={btnStyle}>Add</button>
      </div>

      <ul style={listStyle}>
        {list.map((c, i) => (
          <li key={i} style={listItem}>
            {c}
            <button onClick={() => dispatch(removeCertification(i))} style={deleteBtn}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate("/preview")} style={{ ...btnStyle, marginTop: 20 }}>
        Preview Resume
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

const title = { marginBottom: 20 };

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
