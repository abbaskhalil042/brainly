import express, { RequestHandler } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { content } from "../controller/content";

const contentRoutes = express.Router();

// contentRoutes.post("/content", authMiddleware as unknown as RequestHandler, content as unknown as RequestHandler);
contentRoutes.post("/add",authMiddleware,content)
export default contentRoutes;
