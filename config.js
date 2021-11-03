import mongoose from "mongoose";
import { config } from "dotenv";
config();
const mongoUrl = process.env.MONGO_URL;

export const connectDb = () => {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
