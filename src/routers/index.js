import { Router } from "express";
import userRouter from "./userRouter.js";
import appointmentRouter from "./appointmentRouter.js";
const mainRouter = Router();

mainRouter.use(userRouter);
mainRouter.use(appointmentRouter);

export default mainRouter;
