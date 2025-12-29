import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, removeSkill } from "../redux/resumeSlice";
import { useNavigate } from "react-router-dom";

export default function Skills() {
  const [skill, setSkill] = useState("");
  const skills = useSelector((state) => state.resume.skills);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    if (skill.trim() !== "") {
      dispatch(addSkill(skill.trim()));
      setSkill("");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Skills</h2>

      <div style={styles.inputRow}>
        <input
          type="text"
          placeholder="Enter skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addBtn}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {skills.map((item, index) => (
          <li key={index} style={styles.listItem}>
            <span>{item}</span>
            <button
              onClick={() => dispatch(removeSkill(index))}
              style={styles.deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

     
      <button
        style={styles.previewBtn}
        onClick={() => navigate("/languages")}
      >
        Next
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "60px auto",
    padding: "30px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  },
  heading: {
    marginBottom: "20px"
  },
  inputRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px"
  },
  addBtn: {
    padding: "10px 18px",
    background: "#111827",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginBottom: "25px"
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 14px",
    marginBottom: "10px",
    background: "#f3f4f6",
    borderRadius: "6px"
  },
  deleteBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer"
  },
  previewBtn: {
    width: "100%",
    padding: "12px",
    background: "#111827",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};
