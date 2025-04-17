import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { UserType } from "../utils/types";
import User from "../models/user.models";

//* signup
export const signup = async (req: any, res: any) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({ message: "User created successfully", user });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

//* signin
export const signin = async (req: any, res: any) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcryptjs.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    //*token
    const token = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    return res
      .status(200)
      .json({ token: token, message: "User signed in successfully" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};


