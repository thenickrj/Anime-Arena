const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json("notes");
});

app.use("/api/users", userRoutes);

app.listen(port, console.log(`Server started on port ${port}`));
