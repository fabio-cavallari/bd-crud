import { Router } from "express";
import {
  postHasCharacter,
  getHasCharacters,
  putHasCharacter,
  deleteHasCharacter
} from "./service";

const routes = new Router();

routes.post("/", postHasCharacter);

routes.get("/", getHasCharacters);

routes.put("/id_hq=:id_hq&id_autor=:id_autor", putHasCharacter);

routes.delete("/id_hq=:id_hq&id_autor=:id_autor", deleteHasCharacter);

export default routes;
