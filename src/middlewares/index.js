import express from "express";
import bodyParser from "body-parser";
import charatersRouter from "../characters/routes";

export default app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.json());
  app.use("/character", charatersRouter);
};
