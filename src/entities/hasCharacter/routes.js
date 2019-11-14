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

routes.put("/id_hq=:id_hq&id_pers=:id_pers", putHasCharacter);

routes.delete("/id_hq=:id_hq&id_pers=:id_pers", deleteHasCharacter);

export default routes;
