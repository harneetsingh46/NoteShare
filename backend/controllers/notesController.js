import mongoose from "mongoose";
import Notes from "../models/Notes.js";

export const createNote = async (req, res) => {
  const { title, content, semester, subject } = req.body;

  try {
    if (!title || !content || !semester || !subject) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const note = await Notes.create({
      title,
      content,
      semester,
      subject,
      createdBy: req.user._id,
    });

    return res.status(200).json({
      message: "Note created successfully",
      note: note,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error occured",
      error: error.message,
    });
  }
};

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find();

    return res.status(200).json({
      message: "Note fetched successfully",
      notes: notes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error occured",
      error: error.message,
    });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Notes.findOne({
      _id: req.params.id,
    });

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    return res.status(200).json({
      message: "Note fetched successfully",
      note: note,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error occured",
      error: error.message,
    });
  }
};

export const updateNote = async (req, res) => {
  const { title, content, semester, subject } = req.body;

  try {
    const note = await Notes.findOne({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    note.title = title;
    note.content = content;
    note.semester = semester;
    note.subject = subject;

    await note.save();

    return res.status(200).json({
      message: "Note updated successfully",
      note: note,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error occured",
      error: error.message,
    });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const note = await Notes.findOne({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    await note.deleteOne();

    return res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
