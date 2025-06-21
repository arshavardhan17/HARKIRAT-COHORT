import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./Db/db.js";
import authRouts from "./routes/auth.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json);

//connect to the database
connectDB();

app.use("/api/auth", authRouts);

app.listen(PORT, () => {
  console.log(`app is running at port ${PORT}`);
});
