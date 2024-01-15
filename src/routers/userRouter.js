import { Router } from "express";
import {getUsersHandler, postUserHandler} from "../handlers/userHandlers.js";
const userRouter = Router();

userRouter.get("/user", getUsersHandler);
userRouter.post("/user", postUserHandler);

export default userRouter;
