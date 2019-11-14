import { Router } from "express";
import {
  postCharacter,
  getCharacters,
  getCharacterById,
  putCharacterById,
  deleteCharacterById
} from "./service";

const routes = new Router();

routes.post("/", postCharacter);

routes.get("/", getCharacters);

routes.get("/:id", getCharacterById);

routes.put("/:id", putCharacterById);

routes.delete("/:id", deleteCharacterById);

export default routes;
