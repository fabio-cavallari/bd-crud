import { Router } from "express";
import { postCharacter } from "./service";

const routes = new Router();

routes.post("/character", postCharacter);

export default routes;
