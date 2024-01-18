import { Router } from "express";
import { postServiceHandler } from "../handlers/serviceHandlers.js";
const serviceRouter = Router();

serviceRouter.post("/service", postServiceHandler);

export default serviceRouter;
