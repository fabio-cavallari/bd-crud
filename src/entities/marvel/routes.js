import { Router } from "express";
import { getMarvel } from "./service";

const routes = new Router();

routes.get("/", getMarvel);

export default routes;
