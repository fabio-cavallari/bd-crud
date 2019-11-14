import express from "express";
import bodyParser from "body-parser";
import storiesRouter from "../entities/stories/routes";
import charactersRouter from "../entities/characters/routes";
import authorsRouter from "../entities/authors/routes";
import hasAuthorsRouter from "../entities/hasAuthor/routes";
import hasCharactersRouter from "../entities/hasCharacter/routes";

export default app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.json());
  app.use("/stories", storiesRouter);
  app.use("/characters", charactersRouter);
  app.use("/authors", authorsRouter);
  app.use("/hasAuthors", hasAuthorsRouter);
  app.use("/hasCharacters", hasCharactersRouter);
};
