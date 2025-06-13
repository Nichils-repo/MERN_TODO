import express, { json } from "express";

const app = express();


// endpoint = URL + http method that lets the client interact w specific resource
// the req,res => {} is just a normal js function
//which is then enclosed in the app.get which is an express method
//.send => sends a html response
// can be .something else asw

app.get("/api/notes", (req, res) => {
  res.status(200).send("you got 20 notes");
});

//201 => created success
app.post("/api/notes" , (req,res) => {
  res.status(201).json({
    message : "post created successfully"
  })
})

//obviously you wont update the entire folder for a single note
//so we have to specify which exact note to update, hence the /"id..."
//:id -> is dynamic, the exact note can have any id,
// url will look something like - http://localhost:5001/api/notes/20

app.put("api/notes/:id" , (req,res) =>{
  res.status(200).json({
    message : "post updated successfully"
  })
})


//for deletion : 
app.delete("api/notes/:id", (req, res)=>{
  res.status(200),json({
    message: "note deleted successfully"
  })
})




app.listen(5001, () => {
  console.log("server started at port 5001");
});
