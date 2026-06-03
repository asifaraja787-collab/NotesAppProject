import express from "express";

import protect from "../middleware/authMiddleware.js";

import upload from "../middleware/multerMiddleware.js";

import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";

const router = express.Router();

router.get("/", protect, getNotes);

router.post(
  "/",
  protect,
  upload.single("image"),
  createNote
);

router.put("/:id", protect, updateNote);

router.delete("/:id", protect, deleteNote);

export default router;