const express = require("express");
const mongoose = require("mongoose");
const aws = require('aws-sdk');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = process.env.NODE_ENV === "production" ?  process.env.DATABASE_URL : config.get('mongo-url');

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));


// Service static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//be heard at either configured port such as on heroku etc or 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
