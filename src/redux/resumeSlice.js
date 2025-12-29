import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    template: 0,

    personal: {
      first: "",
      last: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      address: "",
      summary: "",
      image: ""
    },

    experience: [],
    education: [],
    skills: [],
    languages: [],
    projects: [],
    certifications: []
  },

  reducers: {
    setTemplate: (state, action) => {
      state.template = action.payload;
    },

    setPersonal: (state, action) => {
      state.personal = { ...state.personal, ...action.payload };
    },

   
    addExperience: (state, action) => {
      state.experience.push(action.payload);
    },
    removeExperience: (state, action) => {
      state.experience.splice(action.payload, 1);
    },

  
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    removeEducation: (state, action) => {
      state.education.splice(action.payload, 1);
    },

   
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action) => {
      state.skills.splice(action.payload, 1);
    },

  
    addLanguage: (state, action) => {
      state.languages.push(action.payload);
    },
    removeLanguage: (state, action) => {
      state.languages.splice(action.payload, 1);
    },

   
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action) => {
      state.projects.splice(action.payload, 1);
    },


    addCertification: (state, action) => {
      state.certifications.push(action.payload);
    },
    removeCertification: (state, action) => {
      state.certifications.splice(action.payload, 1);
    }
  }
});

export const {
  setTemplate,
  setPersonal,

  addExperience,
  removeExperience,

  addEducation,
  removeEducation,

  addSkill,
  removeSkill,

  addLanguage,
  removeLanguage,

  addProject,
  removeProject,

  addCertification,
  removeCertification
} = resumeSlice.actions;

export default resumeSlice.reducer;
