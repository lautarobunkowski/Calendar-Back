import { Router } from "express";
import {getUserHandler, postUserHandler} from "../handlers/userHandlers.js";
const userRouter = Router();

userRouter.get("/user", getUserHandler);
userRouter.post("/user", postUserHandler);

export default userRouter;
