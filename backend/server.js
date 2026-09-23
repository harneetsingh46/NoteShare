// 1. imports
import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// 2. setup
dotenv.config();

// 3. create the app FIRST
const app = express();

connectDb();

// 4. only then use it
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
}

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.use("/api/user", userRoutes);
app.use("/api/notes", notesRoutes);

if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;