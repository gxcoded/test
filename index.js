require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Running at Port " + PORT));

app.get("/", (req, res) => {
  res.status(200).send("THis is the Home Page for your API");
});
console.log("hello world");
