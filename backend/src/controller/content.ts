import { CustomRequest } from "../middleware/authMiddleware";
import Content from "../models/contet.models";
import { ContentType } from "../utils/contentType";

export const content = async (req: CustomRequest, res: any) => {
  const { title, link, type } = req.body;
  console.log(title, link, type);
  try {
    if (!title || !link || !type) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const content = await Content.create({
      title,
      link,
      type,
      userId: req.userId, //look at the middleware
      tags: [],
    });

    return res
      .status(201)
      .json({ message: "Content created successfully", content });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

//* get all content
export const getContent = async (req: CustomRequest, res: any) => {
  try {
    const userId = req.userId;
    console.log("from get content", userId);
    const content = await Content.find({
      userId: userId,
    }).populate("userId", "username");

    console.log("content : ", content);

    if (!content || content.length === 0) {
      return res
        .status(404)
        .json({ message: "No content found for this user" });
    }

    if (!content) {
      return res.status(404).json({ message: "Content not found" });
    }

    console.log(content);
    return res.status(200).json({ content: content });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteContent = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const deletedContent = await Content.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ message: "Content deleted successfully", deletedContent });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateContent = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { title, link, type } = req.body;
    if (!title || !link || !type) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // const updatedContent = await Content.findByIdAndUpdate(
    //   id,
    //   { title, link, type },
    //   { new: true }
    // );

    const update = await Content.updateOne(
      { _id: id },
      { $set: { title, link, type } }
    );
    return res
      .status(200)
      .json({ message: "Content updated successfully", update });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getContentByType = async (req: any, res: any) => {
  try {
    const { type } = req.params;
    const content = await Content.find({ type });

    return res.status(200).json({ content });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
