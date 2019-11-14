import { Router } from "express";
import { postStory, getStories, putStories, deleteStories } from "./service";

const routes = new Router();

routes.post("/", postStory);

routes.get("/", getStories);

routes.put("/", putStories);

routes.delete("/", deleteStories);

export default routes;
