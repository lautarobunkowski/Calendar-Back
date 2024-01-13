import express from "express";
import mainRouter from "./routers/index.js";

const server = express();

server.use(express.json());
server.use(mainRouter);

export default server;
