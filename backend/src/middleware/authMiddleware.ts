import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface CustomRequest extends Request {
  userId?: string;
}

export const authMiddleware = async (
  req: CustomRequest,
  res: any,
  next: any
) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(401).json({ message: "Please login first" });
    }
    const decoded = jwt.verify(
      token as string,
      process.env.JWT_SECRET as string
    );

    console.log("decoded token", decoded);

    req.userId = (decoded as JwtPayload).id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Please login first" });
  }
};
