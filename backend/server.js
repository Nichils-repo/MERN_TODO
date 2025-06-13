import express from "express";

const app = express();

// the req,res => {} is just a normal js function
//which is then enclosed in the app.get which is an express method
app.get("/api/notes", (req, res) => {
  res.send("you got 5 notes");
});

app.listen(5001, () => {
  console.log("server started at port 5001");
});
