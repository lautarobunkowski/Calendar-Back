import { Router } from "express";
import {
  postAppointmentHandler,
  getAllAppointmentHandler,
} from "../handlers/appointmentHandlers.js";
const appointmentRouter = Router();

appointmentRouter.get("/appointments", getAllAppointmentHandler);
appointmentRouter.post("/appointment", postAppointmentHandler);

export default appointmentRouter;
