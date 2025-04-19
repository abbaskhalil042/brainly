import Content from "../models/contet.models";
import Link from "../models/link.models";
import User from "../models/user.models";

export const shareBrain = async (req: any, res: any) => {
  try {
    const { shareLink } = req.params;
    if (!shareLink) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const link = await Link.findOne({ shareLink });
    console.log(link);
    // console.log(link);

    if (!link) {
      return res.status(400).json({ message: "Link not found" });
    }

    const content = await Content.find({ _id: link._id.toString() });
    if (!content) {
      return res.status(400).json({ message: "Content not found" });
    }

    const user = await User.findOne({
      _id: link._id.toString(),
    });
    return res.status(200).json({ username: link, content });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};


export const shareHash=async(req:any,res:any)=>{
    try {
        // const {hash}=
        
    } catch (error:any) {
        return res.status(500).json({ message: error.message });
        
    }
}
