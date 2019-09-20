const express = require("express");
// to break apart response/requests
const bodyParser = require("body-parser");
// to interact with mongodb easier
const mongoose = require("mongoose");

// Routes
const items = require("./routes/api/items");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB (saved on MLab - https://cloud.mongodb.com/v2/5d8212bed5ec13595d6fad87#clusters/connect?clusterId=Cluster0)
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/items", items);

//be heard at either configured port such as on heroku etc or 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
