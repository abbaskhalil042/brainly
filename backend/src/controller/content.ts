import Content from "../models/contet.models";
import { ContentType } from "../utils/contentType";

export const content = async (req:any, res:any) => {
  const { title, link, type } = req.body;
  console.log(title, link, type);
  try {
    if (!title || !link || !type) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const content = await Content.create({ title, link, type });

    return res
      .status(201)
      .json({ message: "Content created successfully", content });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
