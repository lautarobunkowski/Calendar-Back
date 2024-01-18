import { Router } from "express";
import userRouter from "./userRouter.js";
import appointmentRouter from "./appointmentRouter.js";
import serviceRouter from "./serviceRouter.js";
const mainRouter = Router();

mainRouter.use(userRouter);
mainRouter.use(appointmentRouter);
mainRouter.use(serviceRouter);

export default mainRouter;
