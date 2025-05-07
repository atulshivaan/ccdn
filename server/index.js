import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import ConnectDB from "./config/db.connection.js";
; // Make sure you call this to connect MongoDB

dotenv.config();

// Initialize app
const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", userRouter);



// Start server
app.listen(port, () => {
    ConnectDB();
  console.log(`✅ Server is running on port ${port}`);
});


