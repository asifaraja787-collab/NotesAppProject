// import Note from "../models/Note.js";
// import cloudinary from "../utils/cloudinary.js";
import Note from "../models/Note.js";
import configureCloudinary from "../utils/cloudinary.js";


export const createNote = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { title, content } = req.body;

    let imageUrl = "";

    if (req.file) {
      // const result =
      //   await cloudinary.uploader.upload(
      //     req.file.path
      //   );
const cloudinary =
  configureCloudinary();

const result =
  await cloudinary.uploader.upload(
    req.file.path
  );
      imageUrl = result.secure_url;

      console.log(
        "Cloudinary Upload:",
        imageUrl
      );
    }

    const note = await Note.create({
      title,
      content,
      image: imageUrl,
      user: req.user.id,
    });

    res.status(201).json(note);
  } catch (error) {
    console.log(
      "CREATE NOTE ERROR:",
      error
    );

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getNotes = async (
  req,
  res
) => {
  try {
    const notes =
      await Note.find({
        user: req.user.id,
      }).sort({
        createdAt: -1,
      });

    res.json(notes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateNote = async (
  req,
  res
) => {
  const note = await Note.findById(
    req.params.id
  );

  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  note.title =
    req.body.title || note.title;

  note.content =
    req.body.content || note.content;

  await note.save();

  res.json(note);
};

export const deleteNote = async (
  req,
  res
) => {
  const note = await Note.findById(
    req.params.id
  );

  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  await note.deleteOne();

  res.json({
    message: "Note deleted",
  });
};