// can also be a normal function, this is just an arrow funciton
// and then we can import it into notesRoutes
// this is so that, the function and get long and we would like to compartmentailze them

export const getAllNotes = (req, res) => {
  res.status(200).send("you fetched the notes");
};

export const createNote = (req, res) => {
  res.status(201),
    json({
      message: "note created successfully",
    });
};

export const updateNote = (req, res) => {
  res.status(200).json({
    message: "note updated successfully",
  });
};

export const deleteNote = (req, res) => {
  res.status(200).json({
    message: "note deleted successfully",
  });
}
