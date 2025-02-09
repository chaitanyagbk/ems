import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import connectTODatabase from "./db/db.js";

connectTODatabase();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port 5000");
});