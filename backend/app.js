import express from "express";
import mongoose from "mongoose"
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); 


const app = express();

app.use(cors());
app.use(express.json())
app.use("/api/user",router)
app.use("/api/blog",blogRouter)




const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000);
  })
  .catch((err) => console.log("Error connecting to MongoDB:", err));

