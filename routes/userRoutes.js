import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", userController.signup);
userRouter.post("/signin", userController.signin);

export default userRouter;
