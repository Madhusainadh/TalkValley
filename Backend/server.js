const express = require("express");
const mongoose = require("mongoose")
const adsrouter = require("./Router/ads.Router")
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use("/",adsrouter );

// mongodb://localhost:27017

mongoose
  .connect("mongodb://localhost:27017/TalkVally")
  .then(() => app.listen(8080, () => console.log("server satrted")))
  .catch((er) => console.log(er));
