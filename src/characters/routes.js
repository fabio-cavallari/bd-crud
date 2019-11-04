import { Router } from "express";
import { getCharacter } from "./service";

const routes = new Router();

routes.get("/", getCharacter);

export default routes;
