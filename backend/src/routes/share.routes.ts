import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { createLink, shareBrain } from "../controller/share";

const shareRoutes = express.Router();

shareRoutes.get("/:shareLink", shareBrain);
shareRoutes.post("/", authMiddleware, createLink); //create link like blog.com/share/hash
// shareRoutes.get("/",authMiddleware,shareHash)
export default shareRoutes;
