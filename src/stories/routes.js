import { Router } from "express";
import { postStories, getStories, putStories, deleteStories } from "./service";

const routes = new Router();

routes.post("/", postStories); //create
routes.get("/", getStories); //read
routes.put("/", putStories); //update
routes.delete("/", deleteStories); //delete

export default routes;
