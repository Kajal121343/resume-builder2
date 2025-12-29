import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addExperience, removeExperience } from "../redux/resumeSlice";

export default function WorkExperience() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const list = useSelector((state) => state.resume.experience);

  const [exp, setExp] = useState({
    job: "",
    org: "",
    start: "",
    end: "",
    desc: ""
  });

  const add = () => {
    if (!exp.job || !exp.org) return;
    dispatch(addExperience(exp));
    setExp({ job: "", org: "", start: "", end: "", desc: "" });
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Experience</h2>

        {/* Form */}
        <input
          className="input"
          placeholder="Job title"
          value={exp.job}
          onChange={(e) => setExp({ ...exp, job: e.target.value })}
        />
        <input
          className="input"
          placeholder="Organization"
          value={exp.org}
          onChange={(e) => setExp({ ...exp, org: e.target.value })}
        />
        <input
          className="input"
          placeholder="Start"
          value={exp.start}
          onChange={(e) => setExp({ ...exp, start: e.target.value })}
        />
        <input
          className="input"
          placeholder="End"
          value={exp.end}
          onChange={(e) => setExp({ ...exp, end: e.target.value })}
        />
        <textarea
          className="input"
          placeholder="Description"
          rows="3"
          value={exp.desc}
          onChange={(e) => setExp({ ...exp, desc: e.target.value })}
        />

        <button className="btn primary" onClick={add}>
          Add Experience
        </button>

        {/* Experience List */}
        {list.length > 0 && (
          <div className="list">
            {list.map((x, i) => (
              <div className="list-item" key={i}>
                <div>
                  <strong>{x.job}</strong>
                  <p className="muted">{x.org}</p>
                  <p className="muted">{x.start} - {x.end}</p>
                  <p>{x.desc}</p>
                </div>
                <button
                  className="btn danger"
                  onClick={() => dispatch(removeExperience(i))}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <button className="btn primary full" onClick={() => navigate("/education")}>
          Next
        </button>
      </div>
    </div>
  );
}
