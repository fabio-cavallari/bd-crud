import { Router } from "express";
import {
  postStory,
  getStories,
  getStoryById,
  putStoryById,
  deleteStoryById
} from "./service";

const routes = new Router();

routes.post("/", postStory);

routes.get("/", getStories);

routes.get("/:id", getStoryById);

routes.put("/:id", putStoryById);

routes.delete("/:id", deleteStoryById);

export default routes;
