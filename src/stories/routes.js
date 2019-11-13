import { Router } from "express";
import { getStories } from "./service";

const routes = new Router();

routes.get("/", getStories);

export default routes;
