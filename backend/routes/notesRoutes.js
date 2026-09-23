import express from "express";
import { createNote, deleteNote, getAllNotes, getMyNotes, getNoteById, updateNote } from "../controllers/notesController.js";
import { protect } from "../utils/protect.js";

const router = express.Router();

router.post("/add-note", protect, createNote);
router.get("/getNotes", getAllNotes);
router.get("/my", protect, getMyNotes);
router.get("/getNote/:id", getNoteById);
router.put("/updateNote/:id", protect, updateNote);
router.delete("/deleteNote/:id", protect, deleteNote);


export default router;