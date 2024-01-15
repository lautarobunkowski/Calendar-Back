import { Router } from "express";
import { postAppointmentHandler } from "../handlers/appointmentHandlers.js";
const appointmentRouter = Router();

appointmentRouter.post("/appointment", postAppointmentHandler);

export default userRouter;
