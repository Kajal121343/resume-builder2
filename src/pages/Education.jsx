import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addEducation, removeEducation } from "../redux/resumeSlice";

export default function Education() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const list = useSelector((state) => state.resume.education);

  const [edu, setEdu] = useState({
    university: "",
    degree: "",
    start: "",
    end: ""
  });

  const add = () => {
    if (!edu.university || !edu.degree) return;
    dispatch(addEducation(edu));
    setEdu({ university: "", degree: "", start: "", end: "" });
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Education</h2>

       
        <input
          className="input"
          placeholder="University / College"
          value={edu.university}
          onChange={(e) =>
            setEdu({ ...edu, university: e.target.value })
          }
        />
        <input
          className="input"
          placeholder="Degree"
          value={edu.degree}
          onChange={(e) =>
            setEdu({ ...edu, degree: e.target.value })
          }
        />
        <input
          className="input"
          placeholder="Start Year"
          value={edu.start}
          onChange={(e) =>
            setEdu({ ...edu, start: e.target.value })
          }
        />
        <input
          className="input"
          placeholder="End Year"
          value={edu.end}
          onChange={(e) =>
            setEdu({ ...edu, end: e.target.value })
          }
        />

        <button className="btn primary" onClick={add}>
          Add Education
        </button>

        
        {list.length > 0 && (
          <div className="list">
            {list.map((x, i) => (
              <div className="list-item" key={i}>
                <div>
                  <strong>{x.degree}</strong>
                  <p className="muted">{x.university}</p>
                  <p className="muted">
                    {x.start} - {x.end}
                  </p>
                </div>
                <button
                  className="btn danger"
                  onClick={() => dispatch(removeEducation(i))}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          className="btn primary full"
          onClick={() => navigate("/skills")}
        >
          Next
        </button>
      </div>
    </div>
  );
}
