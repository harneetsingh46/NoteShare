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

// CORS is only needed locally; in production the frontend and API share one domain
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    }),
  );
}

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.use("/api/user", userRoutes);
app.use("/api/notes", notesRoutes);

// Start a server only on your machine; Vercel runs the exported app itself
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
