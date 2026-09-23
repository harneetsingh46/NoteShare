import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import notesRoutes from "./routes/notesRoutes.js"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

dotenv.config();
connectDb();

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
}))

app.use("/api/user", userRoutes);
app.use("/api/notes", notesRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})

export default app;