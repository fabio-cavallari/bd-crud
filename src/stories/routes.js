import { Router } from "express";
import {
  postStory,
  postAuthor,
  postCharacter,
  getStories,
  putStories,
  deleteStories
} from "./service";

const routes = new Router();

routes.post("/story", postStory);
routes.post("/author", postAuthor);
routes.post("/character", postCharacter);

routes.get("/", getStories);

routes.put("/", putStories);
routes.put("/", putStories);
routes.put("/", putStories);

routes.delete("/", deleteStories);
routes.delete("/", deleteStories);
routes.delete("/", deleteStories);

export default routes;
