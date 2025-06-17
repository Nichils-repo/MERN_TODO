// can also be a normal function, this is just an arrow funciton
// and then we can import it into notesRoutes
// this is so that, the function and get long and we would like to compartmentailze them
import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // sort the notes such that newest first
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in get allNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({
        message: "no such note with such ID ",
      });
    }
    res.json(note);
  } catch (error) {
    console.error("Error in get allNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body; //request body
    const note = new Note({ title: title, content: content });
    // can also be writte as const newNote = new Note({title, content})

    const savedNote = await note.save();
    res.status(201).json({
      message: "note created successfully",
    });
  } catch (error) {
    console.error("Error in get createNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
      }
    );
    if (!updatedNote)
      return res.status(404).json({
        message: "note does not exist ",
      });

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in get createNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404), json({ message: "Note not found to delete " });
    res.json({ message: "note successfully deleted" });
    //if no status code mentioned, then default is 200
  } catch (error) {
    console.error("Error in get createNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
