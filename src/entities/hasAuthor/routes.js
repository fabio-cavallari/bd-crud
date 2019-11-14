import { Router } from "express";
import {
  postHasAuthor,
  getHasAuthors,
  putHasAuthor,
  deleteHasAuthor
} from "./service";

const routes = new Router();

routes.post("/", postHasAuthor);

routes.get("/", getHasAuthors);

routes.put("/id_hq=:id_hq&id_autor=:id_autor", putHasAuthor);

routes.delete("/id_hq=:id_hq&id_autor=:id_autor", deleteHasAuthor);

export default routes;
