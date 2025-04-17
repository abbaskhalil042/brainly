import express from "express";
import { signin, signup } from "../controller/user.auth";
const userRoutes: express.Router = express.Router();

// Use different routes for signup and signin
userRoutes.post("/signup", signup);
userRoutes.post("/signin", signin);


// userRoutes.post("/signup", (req, res) => {
//   signup(req, res);
// });

// userRoutes.post("/signin", (req, res) => {
//   signin(req, res);
// });

export default userRoutes;
