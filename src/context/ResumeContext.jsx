import React, { createContext, useContext, useState, useEffect } from "react";

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const initialData = JSON.parse(localStorage.getItem("resumeData") || "{}");

  const [selectedTemplate, setSelectedTemplate] = useState(
    () => Number(localStorage.getItem("selectedTemplate")) || null
  );

  const [formData, setFormData] = useState({
    personal: initialData.personal || {
      first: "",
      last: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      image: ""
    },
    experience: initialData.experience || [],
    education: initialData.education || [],
    skills: initialData.skills || []
  });

  // Always save the selected template
  useEffect(() => {
    localStorage.setItem("selectedTemplate", String(selectedTemplate));
  }, [selectedTemplate]);

  // Save all form data
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(formData));
  }, [formData]);

  return (
    <ResumeContext.Provider
      value={{ selectedTemplate, setSelectedTemplate, formData, setFormData }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);
