import { Router } from "express";
import { postAuthor } from "./service";

const routes = new Router();

routes.post("/authors", postAuthor);

export default routes;
