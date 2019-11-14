import { Router } from "express";
import {
  postAuthor,
  getAuthors,
  getAuthorById,
  putAuthorById,
  deleteAuthorById
} from "./service";

const routes = new Router();

routes.post("/", postAuthor);

routes.get("/", getAuthors);

routes.get("/:id", getAuthorById);

routes.put("/:id", putAuthorById);

routes.delete("/:id", deleteAuthorById);

export default routes;
