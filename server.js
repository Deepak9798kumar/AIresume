require("dotenv").config();
const express = require("express");
const dbConnect = require("./dbConnect");
const userRoute = require("./routes/userRoutes");
// const ResumeParser = require("./resume-parser-master/src");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const College = require("./models/colleges");
const resumeData = require("./models/resume");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors())
// Allow specific origin and methods
// app.use(
//   cors({
//     origin: "https://elaborate-capybara-cee67b.netlify.app/", // Allow React app's origin
//     methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
//     allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
//   })
// );

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

// You can use app.use(express.urlencoded({ extended: true })) to parse URL-encoded request bodies.
app.use(express.urlencoded({ extended: true }));

// /api doesnt matter its just a naming convention. It doesnt matter if you use /api/userRoute or just /userRoute
app.use("/api/user/", userRoute);

app.use(function (req, res, next) {
  if (req.path === "/result" || req.path === "/colleges") {
    res.header("Content-Type", "application/json");
  }
  next();
});

app.set("view engine", "ejs");

//---------------MULTER UPLOAD SECTION-------------------------

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //null(no errors), "destination"
    cb(null, "./resume-parser-master/resumeFiles/");
  },

  filename: (req, file, cb) => {
    console.log(file);
    //we extend and grab the name of the file
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
});


app.get("/colleges", async (req, res) => {
  try {
    //ONLY FINDING COLLEGES BY NAME
    const colleges = await College.find({}, { _id: 0, name: 1 }).sort({
      name: 1,
    });
    res.json(colleges);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});


app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
