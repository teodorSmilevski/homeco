const express = require("express");
const app = express();
const path = require("path");
const productData = require("./data.json");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/products/:room", (req, res) => {
  const { room } = req.params;
  const data = productData[room];
  if (data) {
    res.render("room", { ...data });
  } else {
    res.render("notfound", { room });
  }
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
