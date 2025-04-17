import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req: any, res: any, next: any) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(401).json({ message: "Please login first" });
    }
    const decoded = jwt.verify(
      token as string,
      process.env.JWT_SECRET as string
    );
    req.body.userId = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Please login first" });
  }
};
