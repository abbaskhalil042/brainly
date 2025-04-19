import express from "express"
import { authMiddleware } from "../middleware/authMiddleware"
import { shareBrain, shareHash } from "../controller/share"

const shareRoutes = express.Router()

shareRoutes.get("/brain/:shareLink",authMiddleware,shareBrain)
shareRoutes.get("/",authMiddleware,shareHash)
export default shareRoutes