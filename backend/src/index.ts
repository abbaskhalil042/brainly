import express, { RequestHandler } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes";
import connectDB from "./config/db";
import contentRoutes from "./routes/content.routes";

const app = express();

dotenv.config();
app.use(express.urlencoded({ extended: true }) as RequestHandler);
app.use(express.json() as RequestHandler);

//*user routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/content", contentRoutes);

app.listen(3000, () => {
  connectDB()
    .then(() => {
      console.log("Database connected");
    })
    .catch(() => {
      console.log("Database connection failed");
    });
  console.log("Server is running on port 3000");
});
