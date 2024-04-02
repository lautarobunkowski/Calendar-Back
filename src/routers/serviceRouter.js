import { Router } from "express";
import { postServiceHandler, getServiceHandler } from "../handlers/serviceHandlers.js";
const serviceRouter = Router();

serviceRouter.post("/service", postServiceHandler);
serviceRouter.get("/service", getServiceHandler);

export default serviceRouter;
