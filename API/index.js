//IMPORTS
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
//APP
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
//ALLOW PUBLIC IMAGES
app.use("/images", express.static(path.join(__dirname, "/images")));
//.env
dotenv.config();
//MONGOOSE CONNECTION
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Mongo is connected"))
  .catch((err) => console.log(err));
//STORAGE MULTER FOR IMAGES
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
//UPLOAD MULTER
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been updated");
});
//ROUTES
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
//SERVER
app.listen("5000", () => {
  console.log("API IS ON");
});
