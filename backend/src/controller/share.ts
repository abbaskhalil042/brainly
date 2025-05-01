import Content from "../models/contet.models";
import Link from "../models/link.models";
import User from "../models/user.models";
import generateRandomString from "../utils/generateRandomString";

//*create link to share
export const createLink = async (req: any, res: any) => {
  try {
    const share = req.body.share;
    const url = req.originalUrl;
    console.log("url from create link", url);

    if (share) {
      const existingLink = await Link.findOne({ userId: req.userId });

      if (existingLink) {
        return res.status(400).json({
          link: "/share/" + existingLink.hash,
        });
      }

      const link = await Link.create({
        userId: req.userId,
        hash: generateRandomString(10),
      });
      return res.status(201).json({ link: "/share/" + link.hash });
    } else {
      await Link.deleteOne({
        userId: req.userId,
      });
      return res.status(200).json({ message: "Link deleted successfully" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

//*get shared content
export const shareBrain = async (req: any, res: any) => {
  try {
    const hash = req.params.shareLink;
    console.log(hash);

    console.log("hash", hash);

    const link = await Link.findOne({ hash: hash });

    if (!link) {
      return res.status(400).json({ message: "Link not found" });
    }

    const content = await Content.find({ userId: link.userId.toString() });
    if (!content) {
      return res.status(400).json({ message: "Content not found" });
    }

    const user = await User.findOne({
      _id: link.userId.toString(),
    });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    console.log(user);
    return res.status(200).json({ username: user?.username, content: content });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
