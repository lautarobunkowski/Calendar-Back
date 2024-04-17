import { Router } from "express";
import {
  postAppointmentHandler,
  getAllAppointmentHandler,
  getAppointmentHandler,
} from "../handlers/appointmentHandlers.js";
const appointmentRouter = Router();

appointmentRouter.get("/appointments", getAllAppointmentHandler);
appointmentRouter.get("/appointment/:appointmentId", getAppointmentHandler);
appointmentRouter.post("/appointment", postAppointmentHandler);

export default appointmentRouter;
