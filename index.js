import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./routes/user.js";
import { connectDb } from "./config.js";
const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
connectDb();

app.use("/api/user", userRouter);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});