import express from "express";
const app = express();
const port = "3000";
app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Response sent");
});
app.listen(port, () => {
  console.log(`Server aslaa on port ${port}`);
});
