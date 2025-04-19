import express, { RequestHandler } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  content,
  deleteContent,
  getContent,
  getContentByType,
  updateContent,
} from "../controller/content";

const contentRoutes = express.Router();

// contentRoutes.post("/content", authMiddleware as unknown as RequestHandler, content as unknown as RequestHandler);
contentRoutes.post("/add", authMiddleware, content);
contentRoutes.post("/delete/:id", authMiddleware, deleteContent);
contentRoutes.post("/update/:id", authMiddleware, updateContent);
contentRoutes.post("/get", authMiddleware, getContent);
contentRoutes.post("/get/:type", authMiddleware, getContentByType);
export default contentRoutes;
