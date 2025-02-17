// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     username: { type: String, required: true },
//     password: { type: String, required: true },
//     firstname: { type: String, default: "" },
//     lastname: { type: String, default: "" },
//     email: { type: String, default: "" },
//     mobileNumber: { type: String, default: "" },
//     portfolio: { type: String, default: "" },
//     objective: { type: String, default: "" },
//     address: { type: String, default: "" },
//     education: { type: Array, default: [] },
//     skills: { type: Array, default: [] },
//     experience: { type: Array, default: [] },
//     projects: { type: Array, default: [] },
//     certificates: { type: Array, default: [] },
//     courses: { type: Array, default: [] },
//     cocurricular: { type: Array, default: [] },
//     interests: { type: Array, default: [] },
//   },
//   {
//     timestamps: true,
//   }
// );

// const usermodel = mongoose.model("users", userSchema);

// module.exports = usermodel;




const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, default: "" },
    lastname: { type: String, default: "" },
    email: { type: String, default: "" },
    mobileNumber: { type: String, default: "" },
    portfolio: { type: String, default: "" },
    title : { type: String, default: "" },
    linkedIn : { type: String, default: "" },
    github:  { type: String, default: "" },
    objective: { type: String, default: "" },
    address: { type: String, default: "" },
    education: [
      {
        qualification: { type: String, default: "" },
        course: { type: String, default: "" },
        institution: { type: String, default: "" },
        range: { type: String, default: "" },
        percentage: { type: String, default: "" },
      },
    ],
    skills: { type: Array, default: [] },
    experience: [
      {
        designation: { type: String, default: "" }, // Role ko designation se replace kiya
        company: { type: String, default: "" },
        place: { type: String, default: "" },
        range: { type: String, default: "" },
      
        experienceDescription: { type: String, default: "" }, // Description ko bhi add kiya
      },
    ],
    projects: [
      {
        title: { type: String, default: "" },
        projectLink: { type: String, default: "" },
         
        // technologies: { type: Array, default: [] },
        projectDescription: { type: String, default: "" },
      },
    ],
    certificates: [
      {
        name: { type: String, default: "" },
        credential: { type: String, default: "" },
        year: { type: String, default: "" },
      },
    ],
    courses: [
      {
        name: { type: String, default: "" },
        organization: { type: String, default: "" },
        year: { type: String, default: "" },
      },
    ],
    cocurricular:[
      {
        activity:{ type: String, default: "" },
        description: { type: String, default: "" }
      },
      
          ] ,
    interests: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

const usermodel = mongoose.model("users", userSchema);
module.exports = usermodel;
