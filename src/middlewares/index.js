import express from "express";
import bodyParser from "body-parser";
import storiesRouter from "../stories/routes";

export default app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.json());
  app.use("/stories", storiesRouter);
};
