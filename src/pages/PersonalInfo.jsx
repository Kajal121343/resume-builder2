import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPersonal } from "../redux/resumeSlice";

export default function PersonalInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const existing = useSelector((state) => state.resume.personal);

  const [local, setLocal] = useState({
    first: existing.first || "",
    last: existing.last || "",
    email: existing.email || "",
    phone: existing.phone || "",
    city: existing.city || "",
    state: existing.state || "",
    address: existing.address || "",
    summary: existing.summary || "",
    image: existing.image || ""
  });

  const handleChange = (e) =>
    setLocal({ ...local, [e.target.name]: e.target.value });

  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () =>
      setLocal((prev) => ({ ...prev, image: reader.result }));
    reader.readAsDataURL(file);
  };

  const next = () => {
    dispatch(setPersonal(local));
    navigate("/experience");
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Personal Information</h2>

        <input
          name="first"
          value={local.first}
          onChange={handleChange}
          className="input"
          placeholder="First Name"
        />

        <input
          name="last"
          value={local.last}
          onChange={handleChange}
          className="input"
          placeholder="Last Name"
        />

        <input
          name="email"
          value={local.email}
          onChange={handleChange}
          className="input"
          placeholder="Email"
        />

        <input
          name="phone"
          value={local.phone}
          onChange={handleChange}
          className="input"
          placeholder="Phone Number"
        />

        <input
          name="city"
          value={local.city}
          onChange={handleChange}
          className="input"
          placeholder="City"
        />

        <input
          name="state"
          value={local.state}
          onChange={handleChange}
          className="input"
          placeholder="State"
        />

        <textarea
          name="address"
          value={local.address}
          onChange={handleChange}
          className="input"
          placeholder="Address"
        />

        <textarea
          name="summary"
          value={local.summary}
          onChange={handleChange}
          className="input"
          placeholder="Professional Summary"
        />

        <label style={{ marginTop: "10px", display: "block" }}>
          Upload Profile Photo
        </label>
        <input type="file" accept="image/*" onChange={uploadImage} />

        <button className="btn primary full" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
