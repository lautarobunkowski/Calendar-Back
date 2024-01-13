import { Router } from "express";
import userGetHandler from "../handlers/userGetHandler.js";
import userPostHandler from "../handlers/userPostHandler.js";
const userRouter = Router();

userRouter.get("/user", userGetHandler);
userRouter.post("/user", userPostHandler);

export default userRouter;
