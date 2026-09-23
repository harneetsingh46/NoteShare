import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

connectDb();

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

app.use("/api/user", userRoutes);
app.use("/api/notes", notesRoutes);

export default app;
